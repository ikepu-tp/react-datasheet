FROM node:latest
EXPOSE 6006
RUN apt-get update
RUN apt-get install -y xdg-utils
WORKDIR /src
ENTRYPOINT ["tail", "-f", "/dev/null"]