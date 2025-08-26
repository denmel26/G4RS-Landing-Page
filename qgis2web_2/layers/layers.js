var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RiskAreas_1 = new ol.format.GeoJSON();
var features_RiskAreas_1 = format_RiskAreas_1.readFeatures(json_RiskAreas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiskAreas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiskAreas_1.addFeatures(features_RiskAreas_1);
var lyr_RiskAreas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiskAreas_1, 
                style: style_RiskAreas_1,
                popuplayertitle: 'Risk Areas',
                interactive: true,
    title: 'Risk Areas<br />\
    <img src="styles/legend/RiskAreas_1_0.png" />  High Risk Areas<br />\
    <img src="styles/legend/RiskAreas_1_1.png" /> Medium Risk Areas<br />\
    <img src="styles/legend/RiskAreas_1_2.png" /> Low Risk Areas<br />' });
var format_BaguioCityBoundary_2 = new ol.format.GeoJSON();
var features_BaguioCityBoundary_2 = format_BaguioCityBoundary_2.readFeatures(json_BaguioCityBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaguioCityBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaguioCityBoundary_2.addFeatures(features_BaguioCityBoundary_2);
var lyr_BaguioCityBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaguioCityBoundary_2, 
                style: style_BaguioCityBoundary_2,
                popuplayertitle: 'Baguio City Boundary',
                interactive: false,
                title: '<img src="styles/legend/BaguioCityBoundary_2.png" /> Baguio City Boundary'
            });
var format_BaguioCityBarangayBoundary_3 = new ol.format.GeoJSON();
var features_BaguioCityBarangayBoundary_3 = format_BaguioCityBarangayBoundary_3.readFeatures(json_BaguioCityBarangayBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaguioCityBarangayBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaguioCityBarangayBoundary_3.addFeatures(features_BaguioCityBarangayBoundary_3);
var lyr_BaguioCityBarangayBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaguioCityBarangayBoundary_3, 
                style: style_BaguioCityBarangayBoundary_3,
                popuplayertitle: 'Baguio City Barangay Boundary',
                interactive: false,
                title: '<img src="styles/legend/BaguioCityBarangayBoundary_3.png" /> Baguio City Barangay Boundary'
            });

lyr_OSMStandard_0.setVisible(true);lyr_RiskAreas_1.setVisible(true);lyr_BaguioCityBoundary_2.setVisible(true);lyr_BaguioCityBarangayBoundary_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RiskAreas_1,lyr_BaguioCityBoundary_2,lyr_BaguioCityBarangayBoundary_3];
lyr_RiskAreas_1.set('fieldAliases', {'fid': 'fid', 'Intercept': 'Intercept', 'Highwaysecondary': 'Highwaysecondary', 'Highwayservice': 'Highwayservice', 'Highwaytertiary': 'Highwaytertiary', 'Landuse2': 'Landuse2', 'Landuse4': 'Landuse4', 'Landuse5': 'Landuse5', 'Landuse8': 'Landuse8', 'Landuse12': 'Landuse12', 'Month2': 'Month2', 'Month3': 'Month3', 'Month4': 'Month4', 'Month5': 'Month5', 'Month6': 'Month6', 'Month7': 'Month7', 'Month8': 'Month8', 'Month9': 'Month9', 'Month10': 'Month10', 'Month11': 'Month11', 'Month12': 'Month12', 'Daytime2': 'Daytime2', 'Daytime3': 'Daytime3', 'Daytime4': 'Daytime4', 'DayMonday': 'DayMonday', 'DaySaturday': 'DaySaturday', 'DaySunday': 'DaySunday', 'DayThursday': 'DayThursday', 'DayTuesday': 'DayTuesday', 'DayWednesday': 'DayWednesday', 'Intersection': 'Intersection', 'Barangay': 'Barangay', 'Highwayresidential': 'Highwayresidential', 'Highwaytrunk': 'Highwaytrunk', 'Highwayprimary': 'Highwayprimary', 'Landuse7': 'Landuse7', 'Highwaypath': 'Highwaypath', 'Highwayunclassified': 'Highwayunclassified', 'Landuse10': 'Landuse10', 'Highwaypedestrian': 'Highwaypedestrian', 'Highwaytrunk_link': 'Highwaytrunk_link', 'Highwaytrack': 'Highwaytrack', 'Highwaysteps': 'Highwaysteps', 'Landuse3': 'Landuse3', 'Landuse13': 'Landuse13', 'Highwaysecondary_link': 'Highwaysecondary_link', 'Landuse11': 'Landuse11', 'risk_score': 'risk_score', 'RiskClass': 'RiskClass', });
lyr_BaguioCityBoundary_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'access': 'access', 'is_in_quar': 'is_in_quar', 'source_bou': 'source_bou', 'admin_type': 'admin_type', 'operator_t': 'operator_t', 'name_etymo': 'name_etymo', 'ref_assess': 'ref_assess', 'district': 'district', 'designatio': 'designatio', 'website': 'website', 'source_geo': 'source_geo', 'postal_cod': 'postal_cod', 'old_name': 'old_name', 'official_n': 'official_n', 'official_1': 'official_1', 'official_2': 'official_2', 'official_3': 'official_3', 'official_4': 'official_4', 'official_5': 'official_5', 'official_6': 'official_6', 'name_zh': 'name_zh', 'name_pt': 'name_pt', 'name_pronu': 'name_pronu', 'name_pag': 'name_pag', 'name_id': 'name_id', 'name_ibl': 'name_ibl', 'related_la': 'related_la', 'check_date': 'check_date', 'place': 'place', 'landuse': 'landuse', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'type': 'type', 'short_name': 'short_name', 'ref': 'ref', 'population': 'population', 'populati_1': 'populati_1', 'old_ref': 'old_ref', 'name_tl': 'name_tl', 'name_ja': 'name_ja', 'name_ilo': 'name_ilo', 'name_es': 'name_es', 'name_en': 'name_en', 'name': 'name', 'int_ref': 'int_ref', 'border_typ': 'border_typ', 'alt_name_t': 'alt_name_t', 'alt_name_e': 'alt_name_e', 'alt_name': 'alt_name', 'admin_leve': 'admin_leve', 'ISO3166-2': 'ISO3166-2', });
lyr_BaguioCityBarangayBoundary_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'townhall_t': 'townhall_t', 'short_name': 'short_name', 'nohousenum': 'nohousenum', 'government': 'government', 'contact_fa': 'contact_fa', 'building': 'building', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_quart': 'addr_quart', 'addr_postc': 'addr_postc', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'ref_assess': 'ref_assess', 'ref': 'ref', 'population': 'population', 'populati_1': 'populati_1', 'old_ref': 'old_ref', 'district': 'district', 'old_name': 'old_name', 'wikidata': 'wikidata', 'border_typ': 'border_typ', 'name_pronu': 'name_pronu', 'alt_name': 'alt_name', 'type': 'type', 'name': 'name', 'check_date': 'check_date', 'boundary': 'boundary', });
lyr_RiskAreas_1.set('fieldImages', {'fid': 'TextEdit', 'Intercept': 'TextEdit', 'Highwaysecondary': 'TextEdit', 'Highwayservice': 'TextEdit', 'Highwaytertiary': 'TextEdit', 'Landuse2': 'TextEdit', 'Landuse4': 'TextEdit', 'Landuse5': 'TextEdit', 'Landuse8': 'TextEdit', 'Landuse12': 'TextEdit', 'Month2': 'TextEdit', 'Month3': 'TextEdit', 'Month4': 'TextEdit', 'Month5': 'TextEdit', 'Month6': 'TextEdit', 'Month7': 'TextEdit', 'Month8': 'TextEdit', 'Month9': 'TextEdit', 'Month10': 'TextEdit', 'Month11': 'TextEdit', 'Month12': 'TextEdit', 'Daytime2': 'TextEdit', 'Daytime3': 'TextEdit', 'Daytime4': 'TextEdit', 'DayMonday': 'TextEdit', 'DaySaturday': 'TextEdit', 'DaySunday': 'TextEdit', 'DayThursday': 'TextEdit', 'DayTuesday': 'TextEdit', 'DayWednesday': 'TextEdit', 'Intersection': 'TextEdit', 'Barangay': 'TextEdit', 'Highwayresidential': 'TextEdit', 'Highwaytrunk': 'TextEdit', 'Highwayprimary': 'TextEdit', 'Landuse7': 'TextEdit', 'Highwaypath': 'TextEdit', 'Highwayunclassified': 'TextEdit', 'Landuse10': 'TextEdit', 'Highwaypedestrian': 'TextEdit', 'Highwaytrunk_link': 'TextEdit', 'Highwaytrack': 'TextEdit', 'Highwaysteps': 'TextEdit', 'Landuse3': 'TextEdit', 'Landuse13': 'TextEdit', 'Highwaysecondary_link': 'TextEdit', 'Landuse11': 'TextEdit', 'risk_score': 'TextEdit', 'RiskClass': 'TextEdit', });
lyr_BaguioCityBoundary_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'access': 'TextEdit', 'is_in_quar': 'TextEdit', 'source_bou': 'TextEdit', 'admin_type': 'TextEdit', 'operator_t': 'TextEdit', 'name_etymo': 'TextEdit', 'ref_assess': 'TextEdit', 'district': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'source_geo': 'TextEdit', 'postal_cod': 'TextEdit', 'old_name': 'TextEdit', 'official_n': 'TextEdit', 'official_1': 'TextEdit', 'official_2': 'TextEdit', 'official_3': 'TextEdit', 'official_4': 'TextEdit', 'official_5': 'TextEdit', 'official_6': 'TextEdit', 'name_zh': 'TextEdit', 'name_pt': 'TextEdit', 'name_pronu': 'TextEdit', 'name_pag': 'TextEdit', 'name_id': 'TextEdit', 'name_ibl': 'TextEdit', 'related_la': 'TextEdit', 'check_date': 'TextEdit', 'place': 'TextEdit', 'landuse': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'short_name': 'TextEdit', 'ref': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'old_ref': 'TextEdit', 'name_tl': 'TextEdit', 'name_ja': 'TextEdit', 'name_ilo': 'TextEdit', 'name_es': 'TextEdit', 'name_en': 'TextEdit', 'name': 'TextEdit', 'int_ref': 'TextEdit', 'border_typ': 'TextEdit', 'alt_name_t': 'TextEdit', 'alt_name_e': 'TextEdit', 'alt_name': 'TextEdit', 'admin_leve': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_BaguioCityBarangayBoundary_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_leve': 'TextEdit', 'townhall_t': 'TextEdit', 'short_name': 'TextEdit', 'nohousenum': 'TextEdit', 'government': 'TextEdit', 'contact_fa': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_quart': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'ref_assess': 'TextEdit', 'ref': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'old_ref': 'TextEdit', 'district': 'TextEdit', 'old_name': 'TextEdit', 'wikidata': 'TextEdit', 'border_typ': 'TextEdit', 'name_pronu': 'TextEdit', 'alt_name': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'check_date': 'TextEdit', 'boundary': 'TextEdit', });
lyr_RiskAreas_1.set('fieldLabels', {'fid': 'hidden field', 'Intercept': 'hidden field', 'Highwaysecondary': 'hidden field', 'Highwayservice': 'hidden field', 'Highwaytertiary': 'hidden field', 'Landuse2': 'hidden field', 'Landuse4': 'hidden field', 'Landuse5': 'hidden field', 'Landuse8': 'hidden field', 'Landuse12': 'hidden field', 'Month2': 'hidden field', 'Month3': 'hidden field', 'Month4': 'hidden field', 'Month5': 'hidden field', 'Month6': 'hidden field', 'Month7': 'hidden field', 'Month8': 'hidden field', 'Month9': 'hidden field', 'Month10': 'hidden field', 'Month11': 'hidden field', 'Month12': 'hidden field', 'Daytime2': 'hidden field', 'Daytime3': 'hidden field', 'Daytime4': 'hidden field', 'DayMonday': 'hidden field', 'DaySaturday': 'hidden field', 'DaySunday': 'hidden field', 'DayThursday': 'hidden field', 'DayTuesday': 'hidden field', 'DayWednesday': 'hidden field', 'Intersection': 'hidden field', 'Barangay': 'hidden field', 'Highwayresidential': 'hidden field', 'Highwaytrunk': 'hidden field', 'Highwayprimary': 'hidden field', 'Landuse7': 'hidden field', 'Highwaypath': 'hidden field', 'Highwayunclassified': 'hidden field', 'Landuse10': 'hidden field', 'Highwaypedestrian': 'hidden field', 'Highwaytrunk_link': 'hidden field', 'Highwaytrack': 'hidden field', 'Highwaysteps': 'hidden field', 'Landuse3': 'hidden field', 'Landuse13': 'hidden field', 'Highwaysecondary_link': 'hidden field', 'Landuse11': 'hidden field', 'risk_score': 'hidden field', 'RiskClass': 'no label', });
lyr_BaguioCityBoundary_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'access': 'no label', 'is_in_quar': 'no label', 'source_bou': 'no label', 'admin_type': 'no label', 'operator_t': 'no label', 'name_etymo': 'no label', 'ref_assess': 'no label', 'district': 'no label', 'designatio': 'no label', 'website': 'no label', 'source_geo': 'no label', 'postal_cod': 'no label', 'old_name': 'no label', 'official_n': 'no label', 'official_1': 'no label', 'official_2': 'no label', 'official_3': 'no label', 'official_4': 'no label', 'official_5': 'no label', 'official_6': 'no label', 'name_zh': 'no label', 'name_pt': 'no label', 'name_pronu': 'no label', 'name_pag': 'no label', 'name_id': 'no label', 'name_ibl': 'no label', 'related_la': 'no label', 'check_date': 'no label', 'place': 'no label', 'landuse': 'no label', 'wikipedia': 'no label', 'wikimedia_': 'no label', 'wikidata': 'no label', 'type': 'no label', 'short_name': 'no label', 'ref': 'no label', 'population': 'no label', 'populati_1': 'no label', 'old_ref': 'no label', 'name_tl': 'no label', 'name_ja': 'no label', 'name_ilo': 'no label', 'name_es': 'no label', 'name_en': 'no label', 'name': 'no label', 'int_ref': 'no label', 'border_typ': 'no label', 'alt_name_t': 'no label', 'alt_name_e': 'no label', 'alt_name': 'no label', 'admin_leve': 'no label', 'ISO3166-2': 'no label', });
lyr_BaguioCityBarangayBoundary_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_leve': 'no label', 'townhall_t': 'no label', 'short_name': 'header label - visible with data', 'nohousenum': 'no label', 'government': 'no label', 'contact_fa': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_quart': 'no label', 'addr_postc': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'name_etymo': 'no label', 'ref_assess': 'no label', 'ref': 'no label', 'population': 'no label', 'populati_1': 'no label', 'old_ref': 'no label', 'district': 'no label', 'old_name': 'no label', 'wikidata': 'no label', 'border_typ': 'no label', 'name_pronu': 'no label', 'alt_name': 'no label', 'type': 'no label', 'name': 'no label', 'check_date': 'no label', 'boundary': 'no label', });
lyr_BaguioCityBarangayBoundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});