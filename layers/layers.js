var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZoneEtude_1 = new ol.format.GeoJSON();
var features_ZoneEtude_1 = format_ZoneEtude_1.readFeatures(json_ZoneEtude_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneEtude_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneEtude_1.addFeatures(features_ZoneEtude_1);
var lyr_ZoneEtude_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneEtude_1, 
                style: style_ZoneEtude_1,
                popuplayertitle: 'Zone Etude',
                interactive: true,
                title: '<img src="styles/legend/ZoneEtude_1.png" /> Zone Etude'
            });
var format_Lac_2 = new ol.format.GeoJSON();
var features_Lac_2 = format_Lac_2.readFeatures(json_Lac_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lac_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lac_2.addFeatures(features_Lac_2);
var lyr_Lac_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lac_2, 
                style: style_Lac_2,
                popuplayertitle: 'Lac',
                interactive: true,
                title: '<img src="styles/legend/Lac_2.png" /> Lac'
            });
var format_Route_3 = new ol.format.GeoJSON();
var features_Route_3 = format_Route_3.readFeatures(json_Route_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_3.addFeatures(features_Route_3);
var lyr_Route_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_3, 
                style: style_Route_3,
                popuplayertitle: 'Route',
                interactive: true,
                title: '<img src="styles/legend/Route_3.png" /> Route'
            });
var format_Pharmacie_4 = new ol.format.GeoJSON();
var features_Pharmacie_4 = format_Pharmacie_4.readFeatures(json_Pharmacie_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacie_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacie_4.addFeatures(features_Pharmacie_4);
var lyr_Pharmacie_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacie_4, 
                style: style_Pharmacie_4,
                popuplayertitle: 'Pharmacie',
                interactive: true,
                title: '<img src="styles/legend/Pharmacie_4.png" /> Pharmacie'
            });
var format_Hopital_5 = new ol.format.GeoJSON();
var features_Hopital_5 = format_Hopital_5.readFeatures(json_Hopital_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hopital_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hopital_5.addFeatures(features_Hopital_5);
var lyr_Hopital_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hopital_5, 
                style: style_Hopital_5,
                popuplayertitle: 'Hopital',
                interactive: true,
                title: '<img src="styles/legend/Hopital_5.png" /> Hopital'
            });
var format_Ecole_6 = new ol.format.GeoJSON();
var features_Ecole_6 = format_Ecole_6.readFeatures(json_Ecole_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecole_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecole_6.addFeatures(features_Ecole_6);
var lyr_Ecole_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecole_6, 
                style: style_Ecole_6,
                popuplayertitle: 'Ecole',
                interactive: true,
                title: '<img src="styles/legend/Ecole_6.png" /> Ecole'
            });
var format_Quartier_7 = new ol.format.GeoJSON();
var features_Quartier_7 = format_Quartier_7.readFeatures(json_Quartier_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartier_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartier_7.addFeatures(features_Quartier_7);
var lyr_Quartier_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quartier_7, 
                style: style_Quartier_7,
                popuplayertitle: 'Quartier',
                interactive: true,
                title: '<img src="styles/legend/Quartier_7.png" /> Quartier'
            });
var format_Restaurant_8 = new ol.format.GeoJSON();
var features_Restaurant_8 = format_Restaurant_8.readFeatures(json_Restaurant_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurant_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurant_8.addFeatures(features_Restaurant_8);
var lyr_Restaurant_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restaurant_8, 
                style: style_Restaurant_8,
                popuplayertitle: 'Restaurant',
                interactive: true,
                title: '<img src="styles/legend/Restaurant_8.png" /> Restaurant'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZoneEtude_1.setVisible(true);lyr_Lac_2.setVisible(true);lyr_Route_3.setVisible(true);lyr_Pharmacie_4.setVisible(true);lyr_Hopital_5.setVisible(true);lyr_Ecole_6.setVisible(true);lyr_Quartier_7.setVisible(true);lyr_Restaurant_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZoneEtude_1,lyr_Lac_2,lyr_Route_3,lyr_Pharmacie_4,lyr_Hopital_5,lyr_Ecole_6,lyr_Quartier_7,lyr_Restaurant_8];
lyr_ZoneEtude_1.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', });
lyr_Lac_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'natural': 'natural', 'water': 'water', });
lyr_Route_3.set('fieldAliases', {'osm_id': 'osm_id', 'other_tags': 'other_tags', });
lyr_Pharmacie_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'check_date': 'check_date', 'healthcare': 'healthcare', 'phone': 'phone', 'level': 'level', 'survey_dat': 'survey_dat', 'wheelchair': 'wheelchair', });
lyr_Hopital_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'check_date': 'check_date', 'healthcare': 'healthcare', 'name': 'name', 'phone': 'phone', 'wheelchair': 'wheelchair', });
lyr_Ecole_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:street': 'addr:street', 'amenity': 'amenity', 'name': 'name', 'addr:city': 'addr:city', 'check_date': 'check_date', 'operator:type': 'operator:type', 'level': 'level', 'wheelchair': 'wheelchair', 'phone': 'phone', 'religion': 'religion', 'school:FR': 'school:FR', 'survey:date': 'survey:date', 'addr:postcode': 'addr:postcode', 'description': 'description', });
lyr_Quartier_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'place': 'place', });
lyr_Restaurant_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'bar': 'bar', 'check_date': 'check_date', 'outdoor_seating': 'outdoor_seating', 'phone': 'phone', 'toilets': 'toilets', 'delivery': 'delivery', 'opening_hours': 'opening_hours', 'reservation': 'reservation', 'toilets:wheelchair': 'toilets:wheelchair', 'survey:date': 'survey:date', 'wheelchair': 'wheelchair', });
lyr_ZoneEtude_1.set('fieldImages', {'id_0': 'TextEdit', 'id': 'TextEdit', });
lyr_Lac_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', });
lyr_Route_3.set('fieldImages', {'osm_id': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Pharmacie_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'check_date': 'TextEdit', 'healthcare': 'TextEdit', 'phone': 'TextEdit', 'level': 'TextEdit', 'survey_dat': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_Hopital_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'check_date': 'TextEdit', 'healthcare': 'TextEdit', 'name': 'TextEdit', 'phone': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_Ecole_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr:street': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'addr:city': 'TextEdit', 'check_date': 'TextEdit', 'operator:type': 'TextEdit', 'level': 'TextEdit', 'wheelchair': 'TextEdit', 'phone': 'TextEdit', 'religion': 'TextEdit', 'school:FR': 'TextEdit', 'survey:date': 'TextEdit', 'addr:postcode': 'TextEdit', 'description': 'TextEdit', });
lyr_Quartier_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'place': 'TextEdit', });
lyr_Restaurant_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'bar': 'TextEdit', 'check_date': 'TextEdit', 'outdoor_seating': 'TextEdit', 'phone': 'TextEdit', 'toilets': 'TextEdit', 'delivery': 'TextEdit', 'opening_hours': 'TextEdit', 'reservation': 'TextEdit', 'toilets:wheelchair': 'TextEdit', 'survey:date': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_ZoneEtude_1.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', });
lyr_Lac_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'natural': 'no label', 'water': 'no label', });
lyr_Route_3.set('fieldLabels', {'osm_id': 'no label', 'other_tags': 'no label', });
lyr_Pharmacie_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name': 'no label', 'check_date': 'no label', 'healthcare': 'no label', 'phone': 'no label', 'level': 'no label', 'survey_dat': 'no label', 'wheelchair': 'no label', });
lyr_Hopital_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'header label - visible with data', 'check_date': 'no label', 'healthcare': 'no label', 'name': 'no label', 'phone': 'no label', 'wheelchair': 'no label', });
lyr_Ecole_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'header label - always visible', 'osm_type': 'hidden field', 'addr:street': 'no label', 'amenity': 'no label', 'name': 'no label', 'addr:city': 'no label', 'check_date': 'header label - visible with data', 'operator:type': 'header label - visible with data', 'level': 'no label', 'wheelchair': 'no label', 'phone': 'header label - always visible', 'religion': 'no label', 'school:FR': 'no label', 'survey:date': 'no label', 'addr:postcode': 'no label', 'description': 'no label', });
lyr_Quartier_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'place': 'no label', });
lyr_Restaurant_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name': 'no label', 'bar': 'no label', 'check_date': 'no label', 'outdoor_seating': 'no label', 'phone': 'no label', 'toilets': 'no label', 'delivery': 'no label', 'opening_hours': 'no label', 'reservation': 'no label', 'toilets:wheelchair': 'no label', 'survey:date': 'no label', 'wheelchair': 'no label', });
lyr_Restaurant_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});