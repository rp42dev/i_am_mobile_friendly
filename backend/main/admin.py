from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'status', 'created_at', 'updated_at')
    
admin.site.register(Project, ProjectAdmin)
