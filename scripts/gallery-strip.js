Y.use('squarespace-gallery-strip', function(Y) {
	Y.on('domready', function() {
	
		if (Y.one('body').hasClass('collection-type-blog')) {
		  Y.all('.post-type-gallery').each( function(post) {
		    if (post.all('.slide').size() > 1) {
		      post.addClass('gallery-active');
		      var id = post.one('.slideshow').get('id').split('-')[1];
				  new Y.Squarespace.Gallery({
				    
				    slideshowElement: '#slideshow-' + id,
				    itemSelector: '.slide',
				    startIndex: 0,
				    loop: true,
				    keyboard: false,
				    next: '#slideshow-wrap-' + id + ' .next-slide',
				    previous: '#slideshow-wrap-' + id + ' .prev-slide',
				    currentIndex: '#slideshow-wrap-' + id + ' .current-index',
				    totalSlides: '#slideshow-wrap-' + id + ' .total-slides',
				    
				    design: 'strip',
						designOptions: {
			        	direction: 'horizontal',
			          	alignment: 'middle',
			          	activeSlideBehavior: 'next',
			          	fitImage: true
			        },
			                  
				 });
		      }
		  });
		}


		if (Y.one('body').hasClass('collection-type-gallery')) {
		  Y.all('.page-type-gallery').each( function(post) {
		    if (post.all('.slide').size() > 1) {
		      post.addClass('gallery-active');
		      var id = post.one('.slideshow').get('id').split('-')[1];
				  new Y.Squarespace.Gallery({
				    
				    slideshowElement: '#slideshow-' + id,
				    itemSelector: '.slide',
				    startIndex: 0,
				    loop: true,
				    keyboard: true,
				    next: '#galleryWrapper-' + id + ' .next-slide',
				    previous: '#galleryWrapper-' + id + ' .prev-slide',
				    currentIndex: '#galleryWrapper-' + id + ' .current-index',
				    totalSlides: '#galleryWrapper-' + id + ' .total-slides',
				    
				    design: 'strip',
						designOptions: {
			        	direction: 'horizontal',
			          	alignment: 'middle',
			          	activeSlideBehavior: 'next',
			          	fitImage: true
			        },
			                  
				 });
		      }
		  });
		}


		if (Y.one('body').hasClass('collection-type-projects')) {
		  Y.all('.page-type-project').each( function(post) {
		    
		      post.addClass('project-active');
		      var id = post.one('.slideshow').get('id').split('-')[1];
				  new Y.Squarespace.Gallery({
				    
				    slideshowElement: '#slideshow-' + id,
				    itemSelector: '.slide',
				    startIndex: 0,
				    loop: true,
				    keyboard: true,
				    next: '#projectWrapper-' + id + ' .next-slide',
				    previous: '#projectWrapper-' + id + ' .prev-slide',
				    currentIndex: '#projectWrapper-' + id + ' .current-index',
				    totalSlides: '#projectWrapper-' + id + ' .total-slides',
				    
				    design: 'strip',
						designOptions: {
			        	direction: 'horizontal',
			          	alignment: 'middle',
			          	fitImage: true
			        },
			                  
				 });
				 
		  });
		}



	});
});
