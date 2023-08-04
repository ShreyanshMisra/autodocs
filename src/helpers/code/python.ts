export const python = `import requests

url = 'https://autodocs.vercel.app/api/v1/code-documentation'
key = 'your_api_key'
code = 'your_code'

headers = {
    'Authorization': key
}

payload = {
    'password': password
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`