FROM fusuf/whatsasena:latest

RUN git clone https://github.com/anshadat/Rocky /skl/whatsasena
WORKDIR /skl/whatsasena
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
