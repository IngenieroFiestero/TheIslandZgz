import {DestinoTuzsa} from './destino-tuzsa';

export class ParadaTuzsa {
  id : String;
  title : string;
  lastUpdate : Date;
  destinos: DestinoTuzsa[];
}
/*
{
  "id": "tuzsa-666",
  "title": "(666) INDEPENDENCIA 25 Líneas: 21, 38",
  "lastUpdated": "2017-09-29T20:39:16Z",
  "geometry": {
    "type": "Point",
    "coordinates": [
      -0.8827052335240095,
      41.650280742581785
    ]
  },
  "link": "http://www.urbanosdezaragoza.es/frm_esquemaparadatime.php?poste=666",
  "icon": "http://www.zaragoza.es/contenidos/iconos/bus.png",
  "destinos": [
    {
      "linea": "38",
      "destino": "COCHERA AVANZA ZARAGOZA.",
      "primero": "1 minutos.",
      "segundo": "9 minutos."
    },
    {
      "linea": "21",
      "destino": "PLAZA MOZART.",
      "primero": "1 minutos.",
      "segundo": "8 minutos."
    }
  ]
}*/