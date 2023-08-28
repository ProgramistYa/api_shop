## Запуск сервера

```zsh
npm run --prefix frontend dev & python backend/manage.py runserver
```
### Что нужно сделать для backend:

  - pip install django-cors-headers
  
  - pip install django djangorestframework

#### Выполняем миграции и запускаем сервер:

  - python backend/manage.py makemigrations
    
  - python backend/manage.py migrate
    
  - python backend/manage.py runserver
