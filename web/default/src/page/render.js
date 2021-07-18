export default function render() {
    return `
        <div class="sidebar" data-background-color="white" style="overflow-y: scroll;">
        <div class="logo">
            <a class="simple-text logo-normal">
            <img src="/common/assets/img/earth-icon.png" alt="" height="32" width = "32" style="vertical-align: middle; margin-right: 10px;"/>
            Countries
            </a></div>

        <search-wc class="sidebar-wrapper"></search-wc>
        </div>
        
        <div class="main-panel">
            <div class="content">
                <div class="container-fluid">
                    <div class="row" style="justify-content: space-between;">
                        <data-wc class="col-lg-3 col-md-6 col-sm-6"></data-wc>
                        <data-wc type="confirm" class="col-lg-3 col-md-6 col-sm-6"></data-wc>
                        <data-wc type="recover" class="col-lg-3 col-md-6 col-sm-6"></data-wc>
                        <data-wc type="dead" class="col-lg-3 col-md-6 col-sm-6"></data-wc>
                    </div>
                    <div class="row" style="justify-content: space-between;">
                        <map-wc class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-75" style="width: 75%;"></map-wc>
                        <information-wc class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-25" style="width: 20%;"></information-wc>
                    </div>
                </div>
            </div>
        </div>
        
    `
}
