FROM registry.cn-zhangjiakou.aliyuncs.com/ink-dev-base-image/nginx:1.17.9

COPY deploy-config/nginx.conf /etc/nginx/nginx.conf

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

COPY dist/ /usr/share/nginx/html

RUN chmod 777 /usr/share/nginx -R

