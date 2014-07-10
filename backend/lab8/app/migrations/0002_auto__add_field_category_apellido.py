# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Category.apellido'
        db.add_column(u'app_category', 'apellido',
                      self.gf('django.db.models.fields.CharField')(default=datetime.datetime(2014, 7, 7, 0, 0), max_length=200),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Category.apellido'
        db.delete_column(u'app_category', 'apellido')


    models = {
        u'app.category': {
            'Meta': {'object_name': 'Category'},
            'apellido': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'description': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'slug': ('django.db.models.fields.SlugField', [], {'unique': 'True', 'max_length': '255'})
        },
        u'app.item': {
            'Meta': {'object_name': 'Item'},
            'category': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['app.Category']"}),
            'departament': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'description': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'listing': ('django.db.models.fields.CharField', [], {'default': "'t'", 'max_length': '1'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '120'}),
            'posted_on': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'update_item': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'app.pictures': {
            'Meta': {'object_name': 'Pictures'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'item': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['app.Item']"}),
            'url': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        }
    }

    complete_apps = ['app']