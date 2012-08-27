$(document).ready(function() {
    set_menu_item_selected();
});

MENU_BAR = "#menubar";
HOME_LIST_ITEM = "#home";
ACTIVE_CLASS = "active";
function _unset_all_menu_item_selections() {
    $(MENU_BAR).children().removeClass(ACTIVE_CLASS);
}
function set_menu_item_selected() {
    _unset_all_menu_item_selections();
    list_item = _get_list_id_to_set();

    $(list_item).addClass(ACTIVE_CLASS);
}

function _get_list_id_to_set() {
    page_name = location.pathname.substr(1, location.pathname.length).split(".html")[0].trim();
    return page_name == "" ? $(HOME_LIST_ITEM) : $("#" + page_name);
}