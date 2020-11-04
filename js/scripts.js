window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let navbar = document.getElementById("navbar")
  if(navbar !=null){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").classList.remove('theme');
    //    document.getElementById("navbar").classList.add('bg-white');
        document.getElementById("navbar").classList.add('scrolled');
        document.getElementById("logo").classList.remove('logo');
        document.getElementById("logo").classList.add('logo-scrolled');
      } else{
    //    document.getElementById("navbar").classList.remove('bg-white');
        document.getElementById("navbar").classList.remove('scrolled');
        document.getElementById("navbar").classList.add('theme');
        document.getElementById("logo").classList.add('logo');
        document.getElementById("logo").classList.remove('logo-scrolled');
      }
  }
}


$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

//Graficas dashboard
var ctx = document.getElementById('lineChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre'],
        datasets: [{
            label: 'Gasto en $',
            data: [12, 19, 3, 5, 2, 3, 17, 5, 9, 10, 11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Segunda grafica de dona
var ctx = document.getElementById("doughnut");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Alquiler', 'Supermercado', 'Gastos fijos', 'Tarjetas de credito', 'Auto'],
    datasets: [{
      label: '# of Tomatoes',
      data: [12, 19, 3, 5, 6],
      backgroundColor: [
        'rgba(250,14,93, 0.5)',
        'rgba(213,51,105, 0.2)',
        'rgba(170,94,119, 1)',
        'rgba(134,28,63, 0.2)',
        'rgba(230,136,167, 0.2)'        
      ],
      borderColor: [
        'rgba(250,14,93,1)',
        'rgba(213,51,105, 1)',
        'rgba(170,94,119, 1)',
        'rgba(134,28,63, 1)',
        'rgba(230,136,167, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: true,

  }
});