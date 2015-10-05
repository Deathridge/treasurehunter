# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('finder', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clue',
            name='Altitude',
            field=models.DecimalField(max_digits=10, decimal_places=0),
        ),
        migrations.AlterField(
            model_name='clue',
            name='Latitude',
            field=models.DecimalField(max_digits=10, decimal_places=0),
        ),
        migrations.AlterField(
            model_name='clue',
            name='Longitude',
            field=models.DecimalField(max_digits=10, decimal_places=0),
        ),
    ]
