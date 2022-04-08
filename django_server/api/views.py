from django.shortcuts import render

someJSON = {
    "name": "John",
    "age": 30,
    "city": "New York"
}


def index(request):
    return someJSON
