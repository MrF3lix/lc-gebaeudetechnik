FROM alpine:3.20

RUN apk add --no-cache ca-certificates unzip curl

WORKDIR /pb

# Always fetch the latest stable PocketBase release so we don't have to
# hand-maintain a version number here.
RUN curl -sL "$(curl -s https://api.github.com/repos/pocketbase/pocketbase/releases/latest \
      | grep 'browser_download_url.*linux_amd64.zip' \
      | cut -d '"' -f 4)" -o pb.zip \
    && unzip pb.zip -d /pb \
    && rm pb.zip

EXPOSE 8090

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]
