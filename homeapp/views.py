# from django.shortcuts import render

from django.shortcuts import render
from django.http import HttpResponse
from .forms import usersform
def home(request):
    context ={}
    form = usersform(request.POST or None, request.FILES or None)
    context['form']= form
    if form.is_valid():
        form.save()
        x=request.POST['Username']
        # y=request.POST['password']
        return render(request,"display.html",{'username':x})
    else:
        return render(request, "home.html", context)

