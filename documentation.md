## Project Setup - Ground Up

##### Ensure you have Python 3 installed on pi

> $ python
> Python 3.6.1 (v3.6.1:69c0db5, Mar 21 2017, 17:54:52)
> Type "help", "copyright", "credits" or "license" for more information.
> >>>

#### Ensure you have pip installed on pi

> $ pip -V

#### Ensure you have virtualenv installed on pi

> $ virtualenv --version

If not install it:

> $ pip install virtualenv

#### Create virtual environment

> $ virtualenv vidpi
> Using base prefix 'c:\\.....'
> New python executable in C:\.....\vidpi\Scripts\python.exe
> Installing setuptools, pip, wheel...done.
> $ .\vidpi\Scripts\activate

Add to .gitignore
> $ echo "vidpi\" > .gitignore

#### Check or install Django

Check with:

> (vidpi) $ python -c "import django; print(django.__path__)"

Install with:

> (vidpi) $ pip install django
> Collecting django
>   Using cached https://files.pythonhosted.org/packages/23/91/2245462e57798e9251de87c88b2b8f996d10ddcb68206a8a020561ef7bd3/Django-2.0.5-py3-none-any.whl
> Collecting pytz (from django)
>   Using cached https://files.pythonhosted.org/packages/dc/83/15f7833b70d3e067ca91467ca245bae0f6fe56ddc7451aa0dc5606b120f2/pyt2018.4-> py2.py3-none-any.whl
> Installing collected packages: pytz, django
> Successfully installed django-2.0.5 pytz-2018.4

#### Create file structure

(maybe dont need this idk???)

> (vidpi) $ django-admin startproject musicpi
> (vidpi) $ cd musicpi
> (vidpi) $ python manage.py startapp webplayer

# Run the app

#### Run the app

> $ python manage.py runserver

If there are unapplied migrations:

> $ python manage.py migrate

Create superuser admin:

> $ python manage.py createsuperuser