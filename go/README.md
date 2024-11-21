Docker Hub: https://hub.docker.com/r/empix/fullcycle

Imagem final com tamanho de 1.45MB.

#### Para executar:

```
docker run --rm empix/fullcycle
```

#### Para buildar:

```
docker build -t <nome> .
```

---

Desafio para criação de uma imagem docker que ao ser executada retorne "Full Cycle Rocks!!". Deve ser utilizado Golang e a imagem final deve ser menor que 2MB.

Para completar o desafio utilizei a imagem golang:1.23.3-alpine como o primeiro estágio para compilar o código utilizando algumas flags que otimizam o binário (`-ldflags "-s -w"`) tornando ele mais leve.
Em seguida utilizando a [imagem scratch](https://docs.docker.com/build/building/base-images/#create-a-minimal-base-image-using-scratch) como base da imagem final copiei o binário resultante do primeiro estágio e adicionei o entrypoint para fazer a execução.
