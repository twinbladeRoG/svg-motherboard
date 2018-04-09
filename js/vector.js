$(document).ready(function () {
  var s = Snap("#landing-svg");
    var cpu, gpu1, gpu2, ram1, ram2, ram3, ram4, battery;

    var sinks = function (f, time, flag) {
      if (flag === 1) {
        f.animate({ transform : 't0,'+time }, 1000, mina.easeinout,
        function () {
          sinks(f, time, 0);
        });
      }
      else {
        f.animate({ transform : 't0,0' }, 1000, mina.easeinout,
        function () {
          sinks(f, time, 1);
        });
      }
    };

    Snap.load("res/motherboard.svg", function (f) {
      s.append(f);

      cpu = s.select("#CPU");

      gpu1 = s.select("#GPU1");
      gpu2 = s.select("#GPU2");

      ram1 = s.select("#RAM1");
      ram2 = s.select("#RAM2");
      ram3 = s.select("#RAM3");
      ram4 = s.select("#RAM4");

      var top = s.select("#top-sink");
      var sink1 = s.select("#sink-1");
      var sink2 = s.select("#sink-2");
      var sink3 = s.select("#sink-3");

      var hdmi1 = s.select("#HDMI-1");
      var hdmi2 = s.select("#HDMI-2");

      var rLED = s.select('#rLED-1');
      var yLED = s.select('#yLED-1');
      var gLED = s.select('#gLED-1');

      cpu.transform('t0, -500');
      gpu1.transform('t0, -840');
      gpu2.transform('t0, -920');
      ram1.transform('t0, -420');
      ram2.transform('t0, -420');
      ram3.transform('t0, -420');
      ram4.transform('t0, -420');

      cpu.attr({opacity : '0'});
      gpu1.attr({opacity : '0'});
      gpu2.attr({opacity : '0'});
      ram1.attr({opacity : '0'});
      ram2.attr({opacity : '0'});
      ram3.attr({opacity : '0'});
      ram4.attr({opacity : '0'});

      hdmi1.attr({opacity: '0'});
      hdmi1.transform('t-800,470');

      hdmi2.attr({opacity: '0'});
      hdmi2.transform('t-800,470');

      cpu.animate({ transform : 't0,0', opacity : '1' }, 5000, mina.easeinout, function () {
        gpu1.animate({ transform : 't0,0', opacity : '1'  }, 5000, mina.easeinout, function () {
          gpu2.animate({ transform : 't0,0', opacity : '1'  }, 5000, mina.easeinout, function () {

            hdmi1.animate({transform: 't0,0', opacity : 1}, 2000, mina.easeinout);
            hdmi2.animate({transform: 't0,0', opacity : 1}, 2000, mina.easeinout);

            ram1.animate({ transform : 't0,0', opacity : '1'  }, 3000, mina.easeinout, function () {
              ram2.animate({ transform : 't0,0', opacity : '1'  }, 3000, mina.easeinout, function () {
                ram3.animate({ transform : 't0,0', opacity : '1'  }, 3000, mina.easeinout, function () {
                  ram4.animate({ transform : 't0,0', opacity : '1'  }, 3000, mina.easeinout, function () {

                  });
                });
              });
            });
          });
        });
      });

      rLED.attr({opacity : 0});
      rLED.animate({transform: 's1.5,1.5', opacity: 1}, 1000, mina.easeinout);
      yLED.attr({opacity : 0});
      yLED.animate({transform: 's1.5,1.5', opacity: 1}, 1000, mina.easeinout);
      gLED.attr({opacity : 0});
      gLED.animate({transform: 's1.5,1.5', opacity: 1}, 1000, mina.easeinout);

      sinks(top, 8, 1);
      sinks(sink3, 6, 1);
      sinks(sink2, 4, 1);
      sinks(sink1, 2, 1);
    });
});