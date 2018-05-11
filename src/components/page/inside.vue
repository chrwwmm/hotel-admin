<template>
	<div class="main">
		<div class="inside">
	        <div class="inside-crumbs">
	            <el-breadcrumb separator="/">
	                <el-breadcrumb-item>当前位置</el-breadcrumb-item>
	                <el-breadcrumb-item>首页</el-breadcrumb-item>
					<el-breadcrumb-item>806标准房</el-breadcrumb-item>
	            </el-breadcrumb>			
	        </div>
	        <div class="control-list">
		        <div class="control-list-main">
					<el-tabs type="border-card">
						<el-tab-pane label="设备单独控制">
							<template>
								<ul>
									<li class="control-item" v-for="item in device">
										<span class="span1">{{item.name}}</span>
										<span class="span2">
											<el-switch v-model="item.status"></el-switch><span style="margin-left: 25px;">{{item.status?'开':'关'}}</span>	
										</span>
									</li>
								</ul>
							</template>
						</el-tab-pane>
						<el-tab-pane label="设备区域控制">
							<template>
								<el-tabs :tab-position="tabPosition" style="min-height: 100px;">
									<el-tab-pane label="睡房区域">
										<template>
											<ul>
												<li class="area-item">
													<span class="span1">灯1</span>
													<span class="span2">
														<el-switch v-model="value"></el-switch><span style="margin-left: 25px;">{{value?'开':'关'}}</span>	
													</span>
												</li>
											</ul>
										</template>
									</el-tab-pane>
									<el-tab-pane label="客厅区域">
										<template>
											<ul>
												<li class="area-item">
													<span class="span1">灯2</span>
													<span class="span2">
														<el-switch v-model="value"></el-switch><span style="margin-left: 25px;">{{value?'开':'关'}}</span>	
													</span>
												</li>
											</ul>
										</template>
									</el-tab-pane>
									<el-tab-pane label="浴室区域">
										<template>
											<ul>
												<li class="area-item">
													<span class="span1">灯3</span>
													<span class="span2">
														<el-switch v-model="value"></el-switch><span style="margin-left: 25px;">{{value?'开':'关'}}</span>	
													</span>
												</li>
											</ul>
										</template>
									</el-tab-pane>
									<el-tab-pane label="书房区域">
										<template>
											<ul>
												<li class="area-item">
													<span class="span1">灯4</span>
													<span class="span2">
														<el-switch v-model="value"></el-switch><span style="margin-left: 25px;">{{value?'开':'关'}}</span>	
													</span>
												</li>
											</ul>
										</template>
									</el-tab-pane>
								</el-tabs>
							</template>
						</el-tab-pane>
						<el-tab-pane label="情景模式选择">
							<template>
								<ul>
									<li class="control-item" v-for="item in scene">
										<span class="span1">{{item.name}}</span>
										<span class="span2">
											<el-switch v-model="item.status"></el-switch><span style="margin-left: 25px;">{{item.status?'开':'关'}}</span>	
										</span>
									</li>
								</ul>
							</template>
						</el-tab-pane>
						<el-tab-pane label="联动控制选择">
							<template>
								<ul>
									<li class="control-item" v-for="item in linkage">
										<span class="span1">{{item.name}}</span>
										<span class="span2">
											<el-switch v-model="item.status"></el-switch><span style="margin-left: 25px;">{{item.status?'开':'关'}}</span>	
										</span>
									</li>
								</ul>
							</template>
						</el-tab-pane>
					</el-tabs>
		        </div>
		        
		        <!--工具条-->
				<el-col class="pagination">
					<el-pagination
						@current-change="handleCurrentChange"
						background
						:page-size="5"
						layout="total, prev, pager, next, jumper"
						:total="12">
					</el-pagination>
				</el-col>
	        </div> 
		</div>  	
	</div>
</template>

<script>
	import { getInside } from '../../api/api';
    export default {
        data() {
            return {
				cur_page: '',
				value: true,
				tabPosition: 'left',
				device: [],
				scene: [],
				linkage: []
            }
        },
        created(){
			this.getInside();
		},
        methods: {
			getInside(){
				getInside().then((res) => {
					this.device = res.data.device;
					this.scene = res.data.scene;
					this.linkage = res.data.linkage;
				});
            },
            handleCurrentChange(val){
                this.cur_page = val;
                console.log(this.cur_page);
			}
		}
    }
</script>

<style>
.control-list-main{
	min-height: 260px;
}
.inside-crumbs{
	margin-top: 10px;
	margin-bottom: 20px;
}
.control-item{
	height: 66px;
	line-height: 66px;
	border-bottom: 1px solid #ccc;
}
.area-item{
	height: 60px;
	line-height: 60px;
	border-bottom: 1px solid #ccc;
}
.span1{
	width: 408px;
	display: inline-block;
	text-align: center;
}
.span2{
	width: 408px;
	display: inline-block;
	text-align: center;
	float: right;
}
.el-tabs--border-card>.el-tabs__content {
    padding: 0;
}
.el-tabs__nav {
	width: 100%;
}
.el-tabs__item {
	width: 25.25%;
	height: 60px;
	text-align: center;
    line-height: 60px;
}
.el-pagination.is-background .el-pager li.active {
    background-color: #333744;
}
</style>