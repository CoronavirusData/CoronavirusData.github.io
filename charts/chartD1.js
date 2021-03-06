var chartD1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus deaths",

"title": {
    "text": "Deaths: UK nations",
    "subtitle":"Deaths within 28 days of Covid-19 diagnosis.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&metric=newCasesByPublishDate&metric=newDeaths28DaysByPublishDate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 130,
  
  "width": 150,
  
  "mark": {"type": "bar", "color":"#4f009f"},
  
  "transform": [
     {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "feb", "date": 1},
          {"year": 2020, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  
  "encoding": {
    
    "x": {"field": "date", "type": "temporal", "title": "Date"},
    
    "y": {
      "field": "newDeaths28DaysByPublishDate",
      "type": "quantitative",
      "title": null
    
    },

    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 2,
      "title": null
    },
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "newDeaths28DaysByPublishDate", "type": "quantitative", "title": "Deaths", "format": ",.0f"}
    ]

    
  },
  "resolve": {"scale": {"y": "independent"}}
}
;

vegaEmbed('#chartD1', chartD1, {"actions":false});
