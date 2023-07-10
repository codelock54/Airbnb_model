#FROM jupyter/datascience-notebook
FROM python:3.8-slim-buster

WORKDIR /app

COPY . /app
#RUN mkdir -p /home/app 
RUN pip install --upgrade pip 

RUN pip install --no-cache-dir -r requirements.txt 
#--no-cache-dir
RUN pip install jupyter

EXPOSE 8888

#CMD ["jupyter", "notebook"]
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]

