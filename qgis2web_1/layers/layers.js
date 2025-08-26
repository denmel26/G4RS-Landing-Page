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
var format_BaguioCityBoundary_1 = new ol.format.GeoJSON();
var features_BaguioCityBoundary_1 = format_BaguioCityBoundary_1.readFeatures(json_BaguioCityBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaguioCityBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaguioCityBoundary_1.addFeatures(features_BaguioCityBoundary_1);
var lyr_BaguioCityBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaguioCityBoundary_1, 
                style: style_BaguioCityBoundary_1,
                popuplayertitle: 'Baguio City Boundary',
                interactive: false,
                title: '<img src="styles/legend/BaguioCityBoundary_1.png" /> Baguio City Boundary'
            });
var format_BarangayRiskMap_2 = new ol.format.GeoJSON();
var features_BarangayRiskMap_2 = format_BarangayRiskMap_2.readFeatures(json_BarangayRiskMap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarangayRiskMap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayRiskMap_2.addFeatures(features_BarangayRiskMap_2);
var lyr_BarangayRiskMap_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayRiskMap_2, 
                style: style_BarangayRiskMap_2,
                popuplayertitle: 'Barangay Risk Map',
                interactive: true,
    title: 'Barangay Risk Map<br />\
    <img src="styles/legend/BarangayRiskMap_2_0.png" /> High Risk Barangay<br />\
    <img src="styles/legend/BarangayRiskMap_2_1.png" /> Medium Risk Barangay<br />\
    <img src="styles/legend/BarangayRiskMap_2_2.png" /> Low Risk Barangay<br />' });
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
                interactive: true,
                title: '<img src="styles/legend/BaguioCityBarangayBoundary_3.png" /> Baguio City Barangay Boundary'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BaguioCityBoundary_1.setVisible(true);lyr_BarangayRiskMap_2.setVisible(true);lyr_BaguioCityBarangayBoundary_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BaguioCityBoundary_1,lyr_BarangayRiskMap_2,lyr_BaguioCityBarangayBoundary_3];
lyr_BaguioCityBoundary_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'access': 'access', 'is_in_quar': 'is_in_quar', 'source_bou': 'source_bou', 'admin_type': 'admin_type', 'operator_t': 'operator_t', 'name_etymo': 'name_etymo', 'ref_assess': 'ref_assess', 'district': 'district', 'designatio': 'designatio', 'website': 'website', 'source_geo': 'source_geo', 'postal_cod': 'postal_cod', 'old_name': 'old_name', 'official_n': 'official_n', 'official_1': 'official_1', 'official_2': 'official_2', 'official_3': 'official_3', 'official_4': 'official_4', 'official_5': 'official_5', 'official_6': 'official_6', 'name_zh': 'name_zh', 'name_pt': 'name_pt', 'name_pronu': 'name_pronu', 'name_pag': 'name_pag', 'name_id': 'name_id', 'name_ibl': 'name_ibl', 'related_la': 'related_la', 'check_date': 'check_date', 'place': 'place', 'landuse': 'landuse', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'type': 'type', 'short_name': 'short_name', 'ref': 'ref', 'population': 'population', 'populati_1': 'populati_1', 'old_ref': 'old_ref', 'name_tl': 'name_tl', 'name_ja': 'name_ja', 'name_ilo': 'name_ilo', 'name_es': 'name_es', 'name_en': 'name_en', 'name': 'name', 'int_ref': 'int_ref', 'border_typ': 'border_typ', 'alt_name_t': 'alt_name_t', 'alt_name_e': 'alt_name_e', 'alt_name': 'alt_name', 'admin_leve': 'admin_leve', 'ISO3166-2': 'ISO3166-2', });
lyr_BarangayRiskMap_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_typ': 'osm_typ', 'admn_lv': 'admn_lv', 'twnhll_': 'twnhll_', 'shrt_nm': 'shrt_nm', 'nohosnm': 'nohosnm', 'gvrnmnt': 'gvrnmnt', 'cntct_f': 'cntct_f', 'buildng': 'buildng', 'amenity': 'amenity', 'addr_st': 'addr_st', 'addr_qr': 'addr_qr', 'addr_ps': 'addr_ps', 'addr_cn': 'addr_cn', 'addr_ct': 'addr_ct', 'nam_tym': 'nam_tym', 'rf_ssss': 'rf_ssss', 'ref': 'ref', 'popultn': 'popultn', 'poplt_1': 'poplt_1', 'old_ref': 'old_ref', 'distrct': 'distrct', 'old_nam': 'old_nam', 'wikidat': 'wikidat', 'brdr_ty': 'brdr_ty', 'nam_prn': 'nam_prn', 'alt_nam': 'alt_nam', 'type': 'type', 'name': 'name', 'chck_dt': 'chck_dt', 'boundry': 'boundry', 'Barangy': 'Barangy', 'Intrcpt': 'Intrcpt', 'Intrsct': 'Intrsct', 'men_rsk': 'men_rsk', 'RskClss': 'RskClss', });
lyr_BaguioCityBarangayBoundary_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'townhall_t': 'townhall_t', 'short_name': 'short_name', 'nohousenum': 'nohousenum', 'government': 'government', 'contact_fa': 'contact_fa', 'building': 'building', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_quart': 'addr_quart', 'addr_postc': 'addr_postc', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'ref_assess': 'ref_assess', 'ref': 'ref', 'population': 'population', 'populati_1': 'populati_1', 'old_ref': 'old_ref', 'district': 'district', 'old_name': 'old_name', 'wikidata': 'wikidata', 'border_typ': 'border_typ', 'name_pronu': 'name_pronu', 'alt_name': 'alt_name', 'type': 'type', 'name': 'name', 'check_date': 'check_date', 'boundary': 'boundary', });
lyr_BaguioCityBoundary_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'access': 'TextEdit', 'is_in_quar': 'TextEdit', 'source_bou': 'TextEdit', 'admin_type': 'TextEdit', 'operator_t': 'TextEdit', 'name_etymo': 'TextEdit', 'ref_assess': 'TextEdit', 'district': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'source_geo': 'TextEdit', 'postal_cod': 'TextEdit', 'old_name': 'TextEdit', 'official_n': 'TextEdit', 'official_1': 'TextEdit', 'official_2': 'TextEdit', 'official_3': 'TextEdit', 'official_4': 'TextEdit', 'official_5': 'TextEdit', 'official_6': 'TextEdit', 'name_zh': 'TextEdit', 'name_pt': 'TextEdit', 'name_pronu': 'TextEdit', 'name_pag': 'TextEdit', 'name_id': 'TextEdit', 'name_ibl': 'TextEdit', 'related_la': 'TextEdit', 'check_date': 'TextEdit', 'place': 'TextEdit', 'landuse': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'short_name': 'TextEdit', 'ref': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'old_ref': 'TextEdit', 'name_tl': 'TextEdit', 'name_ja': 'TextEdit', 'name_ilo': 'TextEdit', 'name_es': 'TextEdit', 'name_en': 'TextEdit', 'name': 'TextEdit', 'int_ref': 'TextEdit', 'border_typ': 'TextEdit', 'alt_name_t': 'TextEdit', 'alt_name_e': 'TextEdit', 'alt_name': 'TextEdit', 'admin_leve': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_BarangayRiskMap_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_typ': 'TextEdit', 'admn_lv': 'TextEdit', 'twnhll_': 'TextEdit', 'shrt_nm': 'TextEdit', 'nohosnm': 'TextEdit', 'gvrnmnt': 'TextEdit', 'cntct_f': 'TextEdit', 'buildng': 'TextEdit', 'amenity': 'TextEdit', 'addr_st': 'TextEdit', 'addr_qr': 'TextEdit', 'addr_ps': 'TextEdit', 'addr_cn': 'TextEdit', 'addr_ct': 'TextEdit', 'nam_tym': 'TextEdit', 'rf_ssss': 'TextEdit', 'ref': 'TextEdit', 'popultn': 'TextEdit', 'poplt_1': 'TextEdit', 'old_ref': 'TextEdit', 'distrct': 'TextEdit', 'old_nam': 'TextEdit', 'wikidat': 'TextEdit', 'brdr_ty': 'TextEdit', 'nam_prn': 'TextEdit', 'alt_nam': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'chck_dt': 'TextEdit', 'boundry': 'TextEdit', 'Barangy': 'TextEdit', 'Intrcpt': 'TextEdit', 'Intrsct': 'TextEdit', 'men_rsk': 'TextEdit', 'RskClss': 'TextEdit', });
lyr_BaguioCityBarangayBoundary_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_leve': 'TextEdit', 'townhall_t': 'TextEdit', 'short_name': 'TextEdit', 'nohousenum': 'TextEdit', 'government': 'TextEdit', 'contact_fa': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_quart': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'ref_assess': 'TextEdit', 'ref': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'old_ref': 'TextEdit', 'district': 'TextEdit', 'old_name': 'TextEdit', 'wikidata': 'TextEdit', 'border_typ': 'TextEdit', 'name_pronu': 'TextEdit', 'alt_name': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'check_date': 'TextEdit', 'boundary': 'TextEdit', });
lyr_BaguioCityBoundary_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'access': 'no label', 'is_in_quar': 'no label', 'source_bou': 'no label', 'admin_type': 'no label', 'operator_t': 'no label', 'name_etymo': 'no label', 'ref_assess': 'no label', 'district': 'no label', 'designatio': 'no label', 'website': 'no label', 'source_geo': 'no label', 'postal_cod': 'no label', 'old_name': 'no label', 'official_n': 'no label', 'official_1': 'no label', 'official_2': 'no label', 'official_3': 'no label', 'official_4': 'no label', 'official_5': 'no label', 'official_6': 'no label', 'name_zh': 'no label', 'name_pt': 'no label', 'name_pronu': 'no label', 'name_pag': 'no label', 'name_id': 'no label', 'name_ibl': 'no label', 'related_la': 'no label', 'check_date': 'no label', 'place': 'no label', 'landuse': 'no label', 'wikipedia': 'no label', 'wikimedia_': 'no label', 'wikidata': 'no label', 'type': 'no label', 'short_name': 'no label', 'ref': 'no label', 'population': 'no label', 'populati_1': 'no label', 'old_ref': 'no label', 'name_tl': 'no label', 'name_ja': 'no label', 'name_ilo': 'no label', 'name_es': 'no label', 'name_en': 'no label', 'name': 'no label', 'int_ref': 'no label', 'border_typ': 'no label', 'alt_name_t': 'no label', 'alt_name_e': 'no label', 'alt_name': 'no label', 'admin_leve': 'no label', 'ISO3166-2': 'no label', });
lyr_BarangayRiskMap_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_typ': 'hidden field', 'admn_lv': 'hidden field', 'twnhll_': 'hidden field', 'shrt_nm': 'hidden field', 'nohosnm': 'hidden field', 'gvrnmnt': 'hidden field', 'cntct_f': 'hidden field', 'buildng': 'hidden field', 'amenity': 'hidden field', 'addr_st': 'hidden field', 'addr_qr': 'hidden field', 'addr_ps': 'hidden field', 'addr_cn': 'hidden field', 'addr_ct': 'hidden field', 'nam_tym': 'hidden field', 'rf_ssss': 'hidden field', 'ref': 'hidden field', 'popultn': 'hidden field', 'poplt_1': 'hidden field', 'old_ref': 'hidden field', 'distrct': 'hidden field', 'old_nam': 'hidden field', 'wikidat': 'hidden field', 'brdr_ty': 'hidden field', 'nam_prn': 'hidden field', 'alt_nam': 'hidden field', 'type': 'hidden field', 'name': 'hidden field', 'chck_dt': 'hidden field', 'boundry': 'hidden field', 'Barangy': 'hidden field', 'Intrcpt': 'header label - always visible', 'Intrsct': 'hidden field', 'men_rsk': 'hidden field', 'RskClss': 'no label', });
lyr_BaguioCityBarangayBoundary_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_leve': 'no label', 'townhall_t': 'no label', 'short_name': 'no label', 'nohousenum': 'no label', 'government': 'no label', 'contact_fa': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_quart': 'no label', 'addr_postc': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'name_etymo': 'no label', 'ref_assess': 'no label', 'ref': 'no label', 'population': 'no label', 'populati_1': 'no label', 'old_ref': 'no label', 'district': 'no label', 'old_name': 'no label', 'wikidata': 'no label', 'border_typ': 'no label', 'name_pronu': 'no label', 'alt_name': 'no label', 'type': 'no label', 'name': 'no label', 'check_date': 'no label', 'boundary': 'no label', });
lyr_BaguioCityBarangayBoundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});