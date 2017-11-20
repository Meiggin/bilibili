<template>
	<div class="a">
		<div class="warp_top">
			<p>热门推荐</p>
		</div>
		<div class="warp_animate clear">
			<a class="warp_animate_a clear" v-for='data in animatelist' @click='handleClick(data.redirect_url)'>
				<div class="a_top">
					<img src="//s1.hdslb.com/bfs/static/mult/images/tv.png" alt="" class="bgimg">
					<img :src="data.pic" alt="" class="animg">
					<div class="a_top_bottom clear">
						<div class="playing">
							<svg id="icon-bofangshu" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"></path><path d="M684.8 483.2l-256-112c-22.4-9.6-44.8 6.4-44.8 28.8v224c0 22.4 22.4 38.4 44.8 28.8l256-112c25.6-9.6 25.6-48 0-57.6z"></path></svg>
						</div>
						<div class="playP">
							<p>{{data.play}}</p>
						</div>
						<div class="video_review">
							<svg id="icon-danmushu" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"></path><path d="M240 384h64v64h-64zM368 384h384v64h-384zM432 576h352v64h-352zM304 576h64v64h-64z"></path></svg>
						</div>
						<div class="reviewP">
							<p>{{data.video_review}}</p>
						</div>
					</div>
				</div>
				<div class="a_bottom">
					<p>{{data.title}}</p>
				</div>
			</a>
		</div>
		<div class="footer">
			<p>哔哩哔哩 沪ICP备13002172号-3</p>
			<p>信息网络传播视听节目许可证：0910417</p>
		</div>
	</div>
</template>

<script>
	import router from '@/router';
	export default {

		name: 'a',

		data () {
			return {
				animatelist:[]
			}
		},
		mounted(){
			fetch('/archive_rank/getarchiverankbypartion?jsonp=jsonp&tid=32&pn=1').then(res=>res.json()).then(res=>{
				console.log(res.data.archives);
				this.animatelist=res.data.archives
			})
		},
		methods:{
			handleClick(id){
				console.log(id)
				var str = id.split('#')[1];
				console.log(str);
				//1.0  router.push(`/video?id=${id}`)
				//
				// 2.0
				router.push(`/video/${str}`)
			}
		}
	}
</script>
<style src='@/assets/css/public.css'>
	
</style>
<style lang="scss" scoped>
	.a{
		position: relative;
		width: 100%;
		padding-top:2.1rem;
		.warp_top{
			position: relative;
			margin-left: .512rem;
			p{
				font-size: .98267rem;
				line-height: 2.26133rem;
				text-align: left;
				color: #212121;
			}
		}
		.warp_animate{
			position: relative;
			padding-left: .256rem;
			padding-right: .256rem;
			.warp_animate_a{
				display: block;
				text-decoration: none;
				position: relative;
				width: 50%;
				float: left;
				margin-bottom: .68267rem;
				.a_top{
					position: relative;
					width: 10.232rem;
					height: 6.52267rem;
					overflow: hidden;
					display: block;
					margin: auto;
					border-radius: .256rem;
					-webkit-border-radius: .256rem;
					background-color: #e7e7e7;
					z-index: 1;
					background-image: linear-gradient(transparent 50%,rgba(0,0,0,.5));
					.bgimg{
						position: relative;
						width: 4.52267rem;
						height: 4.52267rem;
						z-index: 1;
					}
					.animg{
						position: absolute;
						top: 0;
						z-index: 2;
						display: block;
						width: 100%;
					}
					.a_top_bottom{
						position: absolute;
						z-index: 3;
						left: 0;
						padding-left: 2.34133rem;
						width: 100%;
						bottom: 0;
						height: .98267rem;
						background: linear-gradient(180deg,rgba(33,33,33,0),rgba(33,33,33,.5));
						.playing{
							position: relative;
							float: left;
							width: .68267rem;
							margin-top: -.064rem;
							svg{
								display: block;
								width: 100%;
								height: .68267rem;
								fill: #fff;
							}
						}
						.playP{
							position: relative;
							float: left;
							margin-left: .256rem;
							width: 2.048rem;
							p{
								text-align: left;
								font-size: .46933rem;
								color: #fff;
								line-height: .59733rem;
							}
						}
						.video_review{
							margin-left: .81867rem;
							position: relative;
							float: left;
							width: .68267rem;
							margin-top: -.064rem;
							svg{
								display: block;
								width: 100%;
								height: .68267rem;
								fill: #fff;
							}
						}
						.reviewP{
							position: relative;
							float: left;
							margin-left: .256rem;
							width: 2.048rem;
							p{
								text-align: left;
								font-size: .46933rem;
								color: #fff;
								line-height: .59733rem;
							}
						}
					}
				}
				.a_bottom{
					width: 9.832rem;
					position: relative;
					margin: auto;
					margin-top: .21333rem;
					height: 1.36533rem;
					overflow: hidden;
					p{
						font-size: .55467rem;
						color: #212121;
						letter-spacing: 0;
						line-height: .68267rem;
						text-align: left;
					}
				}
			}
		}
	}
	.footer{
		position: relative;
		margin-top: 1.344rem;
		padding-bottom: .32rem;
		p{
			font-size: .55467rem;
			color: #999;
			line-height: 1.36533rem;
			text-align: center;
		}
	}
</style>