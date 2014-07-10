# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'TipoCategoria'
        db.create_table(u'app_tipocategoria', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('type_category', self.gf('django.db.models.fields.CharField')(default='u', max_length=1)),
        ))
        db.send_create_signal(u'app', ['TipoCategoria'])


    def backwards(self, orm):
        # Deleting model 'TipoCategoria'
        db.delete_table(u'app_tipocategoria')


    models = {
        u'app.category': {
            'Meta': {'object_name': 'Category'},
            'description': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'posted_on': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
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
        },
        u'app.tipocategoria': {
            'Meta': {'object_name': 'TipoCategoria'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'type_category': ('django.db.models.fields.CharField', [], {'default': "'u'", 'max_length': '1'})
        }
    }

    complete_apps = ['app']