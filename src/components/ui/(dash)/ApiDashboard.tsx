import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDistance } from 'date-fns'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import ApiKeyOptions from './ApiKeyOptions'
import { Input } from './Input'
import Masthead from '../Masthead'
import Paragraph from '../Paragraph'
import Table from './Table'

const ApiDashboard = async ({}) => {
  const user = await getServerSession(authOptions)
  if (!user) return notFound()

  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.user.id },
  })

  const activeApiKey = apiKeys.find((key: any) => key.enabled)

  if (!activeApiKey) return notFound()

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key: any) => key.id),
      },
    },
  })

  const serializableRequests = userRequests.map((req: any) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }))

  return (
    <div className='container flex flex-col gap-6'>
      <Masthead>Welcome back, {user.user.name}</Masthead>
      <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center'>
        <Paragraph>Your API key:</Paragraph>
        <Input className='w-fit truncate' readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyKey={activeApiKey.key} />
      </div>

      <Paragraph className='text-center md:text-left mt-4 -mb-4'>
        Your API history:
      </Paragraph>

      <Table userRequests={serializableRequests} />
    </div>
  )
}

export default ApiDashboard