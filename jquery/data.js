$(function(index){
	//selecting tabs and panells.
	var $tab0 = $('div.data > h2#home');
	var $tab1 = $('div.data > h2#one');
	var $tab2 = $('div.data > h2#two');
	var $tab3 = $('div.data > h2#three');
	var $tab4 = $('div.data > h2#four');
	var $tab5 = $('div.data > h2#five');

	var $viewPanel0 = $('div.view#article');
	var $viewPanel1 = $('div.view#vodacom');
	var $viewPanel2 = $('div.view#mtn');	
	var $viewPanel3 = $('div.view#telkom');	
	var $viewPanel4 = $('div.view#cellc');
	var $viewPanel5 = $('div.view#charts');

	$('div.view[id!="article"]').hide();

	$tab0.on('click',function(){
		$viewPanel1.hide();
		$viewPanel2.hide();
		$viewPanel3.hide();
		$viewPanel4.hide();
		$viewPanel0.slideDown();
		$viewPanel5.hide();
	});

	$tab1.on('click',function(){
		$viewPanel1.slideDown();
		$viewPanel2.hide();
		$viewPanel3.hide();
		$viewPanel4.hide();
		$viewPanel0.hide();
		$viewPanel5.hide();
	});
	$tab2.on('click',function(){
		$viewPanel1.hide();
		$viewPanel2.slideDown();
		$viewPanel3.hide();
		$viewPanel4.hide();
		$viewPanel0.hide();
		$viewPanel5.hide();
	});
	$tab3.on('click',function(){
		$viewPanel1.hide();
		$viewPanel2.hide();
		$viewPanel3.slideDown();
		$viewPanel4.hide();
		$viewPanel0.hide();
		$viewPanel5.hide();
	});
	$tab4.on('click',function(){
		$viewPanel1.hide();
		$viewPanel2.hide();
		$viewPanel3.hide();
		$viewPanel4.slideDown()
		$viewPanel0.hide();
		$viewPanel5.hide();
	});
	$tab5.on('click',function(){
		$viewPanel1.hide();
		$viewPanel2.hide();
		$viewPanel3.hide();
		$viewPanel4.hide();
		$viewPanel0.hide();
		$viewPanel5.slideDown()
	});
});