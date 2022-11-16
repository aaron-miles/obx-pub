/* script */
document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

/* global jQuery:{} */
        jQuery().ready(function () {

            var tdbMenuItem = new tdbMenu.item();
            tdbMenuItem.blockUid = 'tdi_29';
            tdbMenuItem.jqueryObj = jQuery('.tdi_29');


            tdbMenuItem.isMegaMenuFull = true;




            tdbMenu.addItem(tdbMenuItem);

        });




        jQuery().ready(function () {

            var tdbSearchItem = new tdbSearch.item();

            //block unique ID
            tdbSearchItem.blockUid = 'tdi_32';
            tdbSearchItem.blockAtts = '{"form_align":"content-horiz-center","results_msg_align":"content-horiz-center","image_floated":"float_left","image_width":"30","image_size":"td_324x400","show_cat":"eyJwb3J0cmFpdCI6Im5vbmUifQ==","show_btn":"none","show_date":"eyJwb3J0cmFpdCI6Im5vbmUifQ==","show_review":"none","show_com":"none","show_excerpt":"none","show_author":"none","meta_padding":"eyJhbGwiOiIwIDAgMCAxMnB4IiwicG9ydHJhaXQiOiIwIDAgMCAxMHB4IiwibGFuZHNjYXBlIjoiMCAwIDAgMTBweCJ9","art_title":"eyJwaG9uZSI6IjAiLCJhbGwiOiIwIDAgOHB4IDAiLCJsYW5kc2NhcGUiOiIwIDAgNnB4IDAiLCJwb3J0cmFpdCI6IjAgMCA0cHggMCJ9","all_modules_space":"eyJhbGwiOiIyMCIsInBvcnRyYWl0IjoiMTAiLCJsYW5kc2NhcGUiOiIxNSJ9","icon_padding":"eyJhbGwiOiI1IiwicG9ydHJhaXQiOiIxLjYifQ==","icon_size":"eyJhbGwiOiIyMCIsInBvcnRyYWl0IjoiMTYiLCJsYW5kc2NhcGUiOiIxOCJ9","all_underline_color":"","tdc_css":"eyJhbGwiOnsiZGlzcGxheSI6IiJ9LCJsYW5kc2NhcGUiOnsiZGlzcGxheSI6IiJ9LCJsYW5kc2NhcGVfbWF4X3dpZHRoIjoxMTQwLCJsYW5kc2NhcGVfbWluX3dpZHRoIjoxMDE5LCJwb3J0cmFpdCI6eyJtYXJnaW4tbGVmdCI6IjEwIiwiZGlzcGxheSI6IiJ9LCJwb3J0cmFpdF9tYXhfd2lkdGgiOjEwMTgsInBvcnRyYWl0X21pbl93aWR0aCI6NzY4fQ==","toggle_horiz_align":"content-horiz-left","results_msg_padding":"eyJwb3J0cmFpdCI6IjdweCIsImFsbCI6IjE1cHggMCJ9","results_limit":"6","modules_gap":"eyJhbGwiOiIyMCIsInBvcnRyYWl0IjoiMTAifQ==","form_width":"eyJhbGwiOiIxNDAwIiwicG9ydHJhaXQiOiIxMDAlIiwibGFuZHNjYXBlIjoiMTAwJSJ9","results_padding":"eyJhbGwiOiIyNXB4IDIwcHgiLCJwb3J0cmFpdCI6IjIwcHggMjBweCJ9","btn_bg":"var(--metro-blue)","btn_bg_h":"var(--metro-red)","btn_color_h":"#ffffff","f_results_msg_font_style":"","f_results_msg_font_family":"source-sanes-pro-body_global","f_results_msg_font_size":"eyJhbGwiOiIxMiIsInBvcnRyYWl0IjoiMTEifQ==","f_results_msg_font_transform":"","results_msg_color":"#2579e8","results_msg_color_h":"var(--metro-red)","f_title_font_family":"global-font-1_global","f_title_font_size":"eyJhbGwiOiIxOCIsInBvcnRyYWl0IjoiMTQiLCJwaG9uZSI6IjIwIiwibGFuZHNjYXBlIjoiMTYifQ==","f_title_font_line_height":"1.2","form_shadow_shadow_size":"16","form_shadow_shadow_offset_vertical":"2","form_shadow_shadow_color":"rgba(0,0,0,0.09)","f_input_font_family":"source-sanes-pro-body_global","f_input_font_size":"eyJhbGwiOiIxMyIsInBvcnRyYWl0IjoiMTIifQ==","f_placeholder_font_size":"eyJhbGwiOiIxMyIsInBvcnRyYWl0IjoiMTIifQ==","f_placeholder_font_family":"source-sanes-pro-body_global","arrow_color":"rgba(255,255,255,0)","title_txt":"#000000","title_txt_hover":"#2579e8","tdicon":"td-icon-magnifier-medium-short","f_toggle_txt_font_family":"source-sanes-pro-body_global","f_toggle_txt_font_size":"eyJhbGwiOiIxMyIsInBvcnRyYWl0IjoiMTIifQ==","toggle_txt_pos":"","toggle_txt_color":"#000000","f_toggle_txt_font_weight":"500","form_align_screen":"yes","placeholder_travel":"13","f_title_font_weight":"400","meta_info_align":"center","form_border":"0","f_results_msg_font_weight":"600","icon_color":"#ffffff","icon_color_h":"var(--metro-blue-acc)","modules_on_row":"eyJhbGwiOiIzMy4zMzMzMzMzMyUiLCJwb3J0cmFpdCI6IjMzLjMzMzMzMzMzJSJ9","mc1_tl":"15","btn_icon_size":"eyJwb3J0cmFpdCI6IjEwIn0=","modules_category_padding":"3px 0","modules_category_margin":"eyJhbGwiOiIwIDVweCAwIDAiLCJwb3J0cmFpdCI6IjAgM3B4IDAgMCJ9","cat_bg":"rgba(255,255,255,0)","cat_bg_hover":"rgba(255,255,255,0)","cat_txt":"#2579e8","cat_txt_hover":"#e8304f","f_cat_font_family":"source-sanes-pro-body_global","f_cat_font_transform":"uppercase","f_meta_font_family":"source-sanes-pro-body_global","f_cat_font_size":"eyJhbGwiOiIxMiIsInBvcnRyYWl0IjoiMTEiLCJsYW5kc2NhcGUiOiIxMSJ9","f_meta_font_size":"eyJhbGwiOiIxMiIsInBvcnRyYWl0IjoiMTEiLCJsYW5kc2NhcGUiOiIxMSJ9","f_cat_font_line_height":"1","f_meta_font_line_height":"1","f_toggle_txt_font_spacing":"0.5","form_offset":"eyJhbGwiOiIyOSIsInBvcnRyYWl0IjoiMjciLCJsYW5kc2NhcGUiOiIyNyJ9","image_height":"eyJhbGwiOiIxMDAiLCJwb3J0cmFpdCI6IjEyMCIsImxhbmRzY2FwZSI6IjEyMCJ9","input_padding":"eyJhbGwiOiIxMHB4IiwicG9ydHJhaXQiOiI4cHgifQ==","results_border":"0","f_toggle_txt_font_transform":"","input_placeholder":"Search here...","placeholder_color":"#999999","input_border_color":"#eaeaea","btn_color":"#ffffff","f_input_font_spacing":"0.5","f_placeholder_font_spacing":"0.5","f_cat_font_weight":"800","f_cat_font_spacing":"0.5","f_btn_font_family":"source-sanes-pro-body_global","f_input_font_weight":"600","f_placeholder_font_weight":"600","f_btn_font_size":"12","f_btn_font_spacing":"0.5","f_btn_font_weight":"600","f_meta_font_weight":"600","btn_radius":"0 4px 4px 0","input_radius":"4px 0 0 4px","image_radius":"8","float_block":"yes","inline":"yes","show_form":"yes","block_type":"tdb_header_search","post_type":"","disable_trigger":"","show_results":"yes","separator":"","disable_live_search":"","exclude_pages":"","exclude_posts":"","search_section_header":"","results_section_1_title":"","results_section_1_taxonomies":"","results_section_1_level":"","results_section_2_title":"","results_section_2_taxonomies":"","results_section_2_level":"","results_section_3_title":"","results_section_3_taxonomies":"","results_section_3_level":"","results_section_search_query_terms":"","results_section_search_query_terms_title":"","results_section_search_query_terms_taxonomies":"","sec_title_space":"","sec_title_color":"","tax_space":"","tax_title_color":"","tax_title_color_h":"","f_sec_title_font_header":"","f_sec_title_font_title":"Section title text","f_sec_title_font_settings":"","f_sec_title_font_family":"","f_sec_title_font_size":"","f_sec_title_font_line_height":"","f_sec_title_font_style":"","f_sec_title_font_weight":"","f_sec_title_font_transform":"","f_sec_title_font_spacing":"","f_sec_title_":"","f_tax_title_font_title":"Taxonomy title text","f_tax_title_font_settings":"","f_tax_title_font_family":"","f_tax_title_font_size":"","f_tax_title_font_line_height":"","f_tax_title_font_style":"","f_tax_title_font_weight":"","f_tax_title_font_transform":"","f_tax_title_font_spacing":"","f_tax_title_":"","toggle_txt":"","toggle_txt_align":"0","toggle_txt_space":"","form_offset_left":"","form_content_width":"","form_padding":"","input_border":"","btn_text":"Search","btn_tdicon":"","btn_icon_pos":"","btn_icon_space":"","btn_icon_align":"0","btn_margin":"","btn_padding":"","btn_border":"","results_msg_border":"","mc1_title_tag":"","mc1_el":"","m_padding":"","modules_border_size":"","modules_border_style":"","modules_border_color":"#eaeaea","modules_divider":"","modules_divider_color":"#eaeaea","h_effect":"","image_alignment":"50","hide_image":"","video_icon":"","show_vid_t":"block","vid_t_margin":"","vid_t_padding":"","vid_t_color":"","vid_t_bg_color":"","f_vid_time_font_header":"","f_vid_time_font_title":"Video duration text","f_vid_time_font_settings":"","f_vid_time_font_family":"","f_vid_time_font_size":"","f_vid_time_font_line_height":"","f_vid_time_font_style":"","f_vid_time_font_weight":"","f_vid_time_font_transform":"","f_vid_time_font_spacing":"","f_vid_time_":"","meta_info_horiz":"content-horiz-left","meta_width":"","meta_margin":"","meta_info_border_size":"","meta_info_border_style":"","meta_info_border_color":"#eaeaea","art_btn":"","modules_category":"","modules_cat_border":"","modules_category_radius":"0","modules_extra_cat":"","author_photo":"","author_photo_size":"","author_photo_space":"","author_photo_radius":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","time_ago_txt_pos":"","review_space":"","review_size":"2.5","review_distance":"","art_excerpt":"","excerpt_col":"1","excerpt_gap":"","excerpt_middle":"","btn_title":"","btn_border_width":"","form_general_bg":"","toggle_txt_color_h":"","f_toggle_txt_font_header":"","f_toggle_txt_font_title":"Text","f_toggle_txt_font_settings":"","f_toggle_txt_font_line_height":"","f_toggle_txt_font_style":"","f_toggle_txt_":"","form_bg":"","form_border_color":"","form_shadow_shadow_header":"","form_shadow_shadow_title":"Shadow","form_shadow_shadow_offset_horizontal":"","form_shadow_shadow_spread":"","input_color":"","placeholder_opacity":"0","input_bg":"","input_shadow_shadow_header":"","input_shadow_shadow_title":"Input shadow","input_shadow_shadow_size":"","input_shadow_shadow_offset_horizontal":"","input_shadow_shadow_offset_vertical":"","input_shadow_shadow_spread":"","input_shadow_shadow_color":"","btn_icon_color":"","btn_icon_color_h":"","btn_border_color":"","btn_border_color_h":"","btn_shadow_shadow_header":"","btn_shadow_shadow_title":"Button shadow","btn_shadow_shadow_size":"","btn_shadow_shadow_offset_horizontal":"","btn_shadow_shadow_offset_vertical":"","btn_shadow_shadow_spread":"","btn_shadow_shadow_color":"","f_input_font_header":"","f_input_font_title":"Input text","f_input_font_settings":"","f_input_font_line_height":"","f_input_font_style":"","f_input_font_transform":"","f_input_":"","f_placeholder_font_title":"Placeholder text","f_placeholder_font_settings":"","f_placeholder_font_line_height":"","f_placeholder_font_style":"","f_placeholder_font_transform":"","f_placeholder_":"","f_btn_font_title":"Button text","f_btn_font_settings":"","f_btn_font_line_height":"","f_btn_font_style":"","f_btn_font_transform":"","f_btn_":"","results_bg":"","results_border_color":"","results_msg_bg":"","results_msg_border_color":"","f_results_msg_font_header":"","f_results_msg_font_title":"Text","f_results_msg_font_settings":"","f_results_msg_font_line_height":"","f_results_msg_font_spacing":"","f_results_msg_":"","m_bg":"","color_overlay":"","shadow_module_shadow_header":"","shadow_module_shadow_title":"Module Shadow","shadow_module_shadow_size":"","shadow_module_shadow_offset_horizontal":"","shadow_module_shadow_offset_vertical":"","shadow_module_shadow_spread":"","shadow_module_shadow_color":"","all_underline_height":"","cat_border":"","cat_border_hover":"","meta_bg":"","author_txt":"","author_txt_hover":"","date_txt":"","ex_txt":"","com_bg":"","com_txt":"","rev_txt":"","shadow_meta_shadow_header":"","shadow_meta_shadow_title":"Meta info shadow","shadow_meta_shadow_size":"","shadow_meta_shadow_offset_horizontal":"","shadow_meta_shadow_offset_vertical":"","shadow_meta_shadow_spread":"","shadow_meta_shadow_color":"","btn_bg_hover":"","btn_txt":"","btn_txt_hover":"","btn_border_hover":"","f_title_font_header":"","f_title_font_title":"Article title","f_title_font_settings":"","f_title_font_style":"","f_title_font_transform":"","f_title_font_spacing":"","f_title_":"","f_cat_font_title":"Article category tag","f_cat_font_settings":"","f_cat_font_style":"","f_cat_":"","f_meta_font_title":"Article meta info","f_meta_font_settings":"","f_meta_font_style":"","f_meta_font_transform":"","f_meta_font_spacing":"","f_meta_":"","f_ex_font_title":"Article excerpt","f_ex_font_settings":"","f_ex_font_family":"","f_ex_font_size":"","f_ex_font_line_height":"","f_ex_font_style":"","f_ex_font_weight":"","f_ex_font_transform":"","f_ex_font_spacing":"","f_ex_":"","el_class":"","block_template_id":"","td_column_number":1,"header_color":"","ajax_pagination_infinite_stop":"","offset":"","limit":"5","td_ajax_preloading":"","td_ajax_filter_type":"","td_filter_default_txt":"","td_ajax_filter_ids":"","color_preset":"","ajax_pagination":"","ajax_pagination_next_prev_swipe":"","border_top":"","css":"","class":"tdi_32","tdc_css_class":"tdi_32","tdc_css_class_style":"tdi_32_rand_style"}';
            tdbSearchItem.jqueryObj = jQuery('.tdi_32');
            tdbSearchItem._openSearchFormClass = 'tdb-drop-down-search-open';
            tdbSearchItem._resultsLimit = '6';



            tdbSearchItem.isSearchFormFull = true;

            tdbSearch.addItem(tdbSearchItem);

        });




        /* global jQuery:{} */
        jQuery(window).on('load', function () {

            var jquery_object_container = jQuery('.tdi_46 .tdb-category-siblings');

            if (jquery_object_container.hasClass('tdb-category-siblings-inline')) {
                var horizontal_jquery_obj = jquery_object_container.find('.td-category:first');
                var pulldown_item_obj = new tdPullDown.item();

                pulldown_item_obj.blockUid = jquery_object_container.parent().parent().data('td-block-uid'); // get the block UID
                pulldown_item_obj.horizontal_jquery_obj = horizontal_jquery_obj;
                pulldown_item_obj.vertical_jquery_obj = jquery_object_container.find('.td-subcat-dropdown:first');
                pulldown_item_obj.horizontal_element_css_class = 'entry-category';
                pulldown_item_obj.container_jquery_obj = horizontal_jquery_obj.parents('.tdb-category-siblings:first');
                tdPullDown.add_item(pulldown_item_obj);
            }

        });
