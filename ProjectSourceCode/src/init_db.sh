#!/bin/bash

# DO NOT PUSH THIS FILE TO GITHUB
# This file contains sensitive information and should be kept private

# TODO: Set your PostgreSQL URI - Use the External Database URL from the Render dashboard
PG_URI="postgresql://board_db_4i2u_user:HcFOjw0zpF0JmF4y7T8sFe2nZtMnP4pq@dpg-d21a8fvfte5s73fcgca0-a.oregon-postgres.render.com/board_db_4i2u"

# Execute each .sql file in the directory
for file in init_data/*.sql; do
    echo "Executing $file..."
    psql $PG_URI -f "$file"
done