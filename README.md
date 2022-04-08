# React App with Drupal and Django
- This is an exploration into the React/Django/Drupal stack.
- Uses websockets for real time chat
## Getting Started with Drupal
1. Point your MAMP server to the web directory
2. Create new MySQL database
3. Visit drupal site and install database

## Getting Started with Express
```
cd django_server
```
Prepare the virtual environment:
```
python3 -m venv env
```
Activate the virtual environment:
```
source env/bin/activate
```
Install Django and pin the dependencies:
```
pip install channels
python -m pip install django
python -m pip freeze > requirements.txt
```


## Getting Started with React
```
cd react_client
npm install
```

