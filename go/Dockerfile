FROM golang:1.23.3-alpine AS builder

WORKDIR /usr/src/app

COPY go.mod fullcycle.go ./

RUN go build -ldflags "-s -w"

FROM scratch

COPY --from=builder /usr/src/app/rocks ./

ENTRYPOINT [ "./rocks" ]