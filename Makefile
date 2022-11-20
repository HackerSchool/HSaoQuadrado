all: clean deploy logs

build:
	docker compose -f docker-compose.yml -f docker-compose.override.yml build

deploy:
	docker compose -f docker-compose.yml -f docker-compose.override.yml up -d

logs:
	docker compose logs -f

logs-backend:
	docker logs -f backend-dev

logs-frontend:
	docker logs -f frontend-dev

shell-backend:
	docker exec -it backend-dev /bin/bash

shell-db:
	docker exec -it arquimedia-db-1 /bin/bash -c "psql -U postgres"

start-celery: start-worker start-beat

start-worker:
	docker exec -i backend-dev /bin/bash -c "celery -A Arquimedia worker -l info -D --logfile='celery-worker.log'"

start-beat:
	docker exec -i backend-dev /bin/bash -c "celery -A Arquimedia beat -l info --scheduler django_celery_beat.schedulers:DatabaseScheduler --logfile='celery-beat.log' --detach"

kill-celery:
	docker exec -i backend-dev /bin/bash -c "pkill -f celery"

restart-celery: kill-celery start-celery

clean:
	docker compose -f docker-compose.yml -f docker-compose.override.yml down --remove-orphans

test-backend:
	docker exec -it backend-dev /bin/bash -c "python3 -m pytest --disable-warnings"

migrate:
	docker exec -it backend-dev /bin/bash -c "python manage.py makemigrations && python manage.py migrate"
