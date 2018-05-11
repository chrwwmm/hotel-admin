<template>
	<div class="main">
		<div class="table">
	        <div class="crumbs">
	            <el-breadcrumb separator="/">
	                <el-breadcrumb-item>当前位置</el-breadcrumb-item>
	                <el-breadcrumb-item>首页</el-breadcrumb-item>
	            </el-breadcrumb>			
	        </div>
			<div class="handle-box">
				<el-input class="inputSearch" placeholder="搜索" v-model="inputSearch">
					<i slot="suffix" class="el-input__icon el-icon-search" @click="handleSearch"></i>
				</el-input>   
		    </div>
	        <div class="roomlist">
		        <div class="roomlist-main">
		        	<el-table :data="roomList" highlight-current-row border style="width: 100%;" ref="multipleTable">
						<el-table-column prop="num" label="房间号" width="80" align="center"></el-table-column>
						<el-table-column prop="type" label="房间类型" width="100" align="center"></el-table-column>
						<el-table-column prop="status" label="房间状态" width="100" align="center"></el-table-column>
						<el-table-column prop="phone" label="客户手机号" width="120" align="center"></el-table-column>
						<el-table-column prop="idCard" label="客户身份证" width="200" align="center"></el-table-column>
						<el-table-column prop="time" label="预约时间/入住时间/到期时间" width="300" align="center"></el-table-column>
						<el-table-column prop="permission" label="房间权限" width="100" align="center">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.permission"></el-checkbox>
                            </template>
                        </el-table-column>
						<el-table-column prop="control" label="设备控制" width="100" align="center">
                            <template slot-scope="scope">
                                <span @click="enter">{{ scope.row.control }}</span>
                            </template>
                        </el-table-column>
						<el-table-column prop="handle" label="预约办理/入住办理/退房办理" min-width="200" align="center"></el-table-column>
			        </el-table>
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
	import { getRoom } from '../../api/api';
    export default {
        data() {
            return {
				inputSearch: '',
            	roomList:[],
				cur_page: ''
            }
        },
        created(){
			this.getRoom();
			console.log(this.getRoom);
		},
        methods: {
			getRoom(){
				getRoom().then((res) => {
					this.roomList = res.data;
				});
            },
            handleCurrentChange(val){
                this.cur_page = val;
                console.log(this.cur_page);
            },
			handleSearch: function () {
				console.log('搜索一下！');
            },
            enter() {
                const self = this;
                self.$router.push('/inside');
            }
		}
    }
</script>

<style>
.roomlist-main{min-height: 260px;}
.crumbs{
	margin-top: 10px;
	margin-bottom: 20px;
	float: left;
}
.handle-box{
	margin-bottom: 20px;
	float: right;
}
.inputSearch{
	margin-left: 10px;
	width: initial;
}
.el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 1px solid #000;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms, -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    -webkit-transform-origin: center;
    transform-origin: center;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #FFF;
    border-color: #dcdfe6;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #dcdfe6;
}
.el-checkbox__inner:hover {
    border-color: #dcdfe6;
}
.el-pagination.is-background .el-pager li.active {
    background-color: #333744;
}
</style>