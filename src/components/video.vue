<template>
	<div class="video">
		<div class="nav">
			<img :src="currentEpisode.cover" />
		</div>
		<div class="title">
			<img :src="season.cover">
			<h4>{{season.title}}</h4>
			<p>{{str}}</p>

			<span></span>
		</div>
	</div>
</template>

<script>
import axios from "axios";
	export default {

		name: 'video',

		data () {
			return {
				currentEpisode:{},
				season:{},
				str:""
			}
		},
		components:{

		},
		mounted(){
			// console.log(this.$router.history.current.query.id)第一种
			// console.log(this.$router.history.current.params.meiggin)//第二种
			// http://bangumi.bilibili.com/web_api/episode/118801.json
			axios.get(`/web_api/episode/${this.$router.history.current.params.meiggin}.json`).then(res=>{
				// console.log(res.data.result)
				this.currentEpisode = res.data.result.currentEpisode
				this.season = res.data.result.season
				var that = this
				// console.log(this.currentEpisode)
				axios.get('/archive_rank/getarchiverankbypartion?jsonp=jsonp&tid=33&pn=1').then(res=>{
				// console.log(that.currentEpisode)

					var arr = res.data.data.archives;

						for(var i in arr){

							if(arr[i].aid == that.currentEpisode.avId){
								console.log(arr[i])
								var str = arr[i].description
								this.str = str
							}
						}
						console.log(str)
				})
			})
			
		}
	}
</script>

<style lang="scss" scoped>
	.video{
		padding-top:2.1rem;
		background: #f3f3f3;
		position: relative;
		width: 100%;
	}
	.nav{
		width:100%;

		img{
			display:block;
			width:100%;
		}
	}
	.title{
		width:100%;
		img{
			display:block;
			width:6.0rem;
			padding:1.5rem;
			float:left;
		}
		h4{
			float:left;

		}
		p{
			float:left;
		}
	}
</style>