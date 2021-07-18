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
                    <div class="row">
                        <data-wc class="col-lg-3 col-md-6 col-sm-6"></data-wc>
                        <data-wc type="confirm" class="col-lg-3 col-md-6 col-sm-6"></data-wc>
                        <data-wc type="recover" class="col-lg-3 col-md-6 col-sm-6"></data-wc>
                        <data-wc type="dead" class="col-lg-3 col-md-6 col-sm-6"></data-wc>
                    </div>
                    <!--
                    <div class="row" style="justify-content: space-between;">
                        <map-wc></map-wc>
                        <information-wc></information-wc>
                    </div>
                    -->
                </div>
            </div>
        </div>
        
    `
}
