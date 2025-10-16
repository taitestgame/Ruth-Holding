import requests

url = "https://script.google.com/macros/s/AKfycbxh2GLySGfigNXHHKzYUcBYdkVUhRD_cvTmH3MswBFeqtuo2L0SHhGoLHeMTGds7fnQ/exec"

data = {
    "firstName": "Tài",
    "lastName": "Trần Đức",
    "countryCode": "+84",
    "email": "tai@example.com",
    "phone": "901234567",
    "message": "Dữ liệu gồm đầu số quốc gia rồi nhé!"
}

response = requests.post(url, data=data)
print(response.text)
