var chartCD1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newCasesByPublishDate&metric=newDeaths28DaysByPublishDate&format=csv",
    "format": {"type": "csv"}
  },

  "title": {
    "text": "Cases vs Deaths: UK (Daily data)",
    "subtitle":"New cases and new deaths (28d) by publish date.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "height": 300,

  "width": 290,

  "config": {"background": "#ffFfFf"},


  "mark": {"type": "circle", "size":75},
  
  "encoding": {
    "x": {"field": "newCasesByPublishDate", "type": "quantitative", "title": "Cases"},
  
    "y": {
      "field": "newDeaths28DaysByPublishDate",
      "type": "quantitative",
      "title": "Deaths"
    },

    "color":{
      "timeUnit":"month",
      "field":"date",
      "type": "ordinal",
      "title":null,
      "scale": {"scheme": "turbo"}
    },

    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {
        "field": "newDeaths28DaysByPublishDate",
        "type": "quantitative",
        "title": "Deaths",
        "format": ",.0f"
      },
      {
        "field": "newCasesByPublishDate",
        "type": "quantitative",
        "title": "Cases",
        "format": ",.0f"
      }
    ]
  }
}
;

vegaEmbed('#chartCD1', chartCD1, {"actions":false});
