# WebComponents-TFM

Comparativa en tiempo de los distintos métodos con distintas cargas de trabajo.

Enviar información de:

- 128 kb
- 256 kb
- 512 kb
- 1024 kb (1 MB)
- 2048 kb (2 MB)
- 5120 kb (5 MB)
- 20480 kb (20 MB)
- 51200 kb (50MB)
- 102400 (100MB)

Métodos de envío:

- REST (cliente web - servidor)
- REST (servidor - servidor)
- gRPC (cliente web - servidor)
- gRPC (servidor - servidor)
- GraphQL (cliente web - servidor) mismos datos que REST
- GraphQL (servidor - servidor) mismos datos que REST
- GraphQL (cliente web - servidor) filtrando campos
- GraphQL (servidor - servidor) filtrando campos

Manda un objeto del tipo:

```json
{
    "field1": "message",
    "field2":["array con datos necesarios para llegar al tamaño deseado"]
}
```
