// Defining preset gradients
const PRESET_GRADIENTS = {
  peach: {
    angle: 135,
    start_color: '#FFD3A5',
    end_color: '#FD6585',
  },
  misty_morning: {
    angle: 135,
    start_color: '#C2FFD8',
    end_color: '#465EFB',
  },
  limeaid: {
    angle: 135,
    start_color: '#FFF720',
    end_color: '#3CD500',
  },
  glimmer: {
    angle: 135,
    start_color: '#FAB2FF',
    end_color: '#1904E5',
  },
  sunrise: {
    angle: 135,
    start_color: '#FFA8A8',
    end_color: '#FCFF00',
  },
  sunset: {
    angle: 135,
    start_color: '#EECE13',
    end_color: '#B210FF',
  },
  lemon: {
    angle: 135,
    start_color: '#FDEB71',
    end_color: '#F8D800',
  },
  lavender: {
    angle: 135,
    start_color: '#F5CBFF',
    end_color: '#C346C2',
  },
  seafoam: {
    angle: 135,
    start_color: '#79F1A4',
    end_color: '#0E5CAD',
  },
  velvet: {
    angle: 135,
    start_color: '#3B2667',
    end_color: '#BC78EC',
  },
};

// Setting main gradient values
let current_gradient = {
  angle: 45,
  start_color: '#ff0000',
  end_color: '#0000ff',
};

// Loading Page
document.onload = render_gradient(set_gradient_rule(
  current_gradient.angle,
  current_gradient.start_color,
  current_gradient.end_color
));

// Collecting values from the gradient form
function collect_gradient_data() {
  let gradient_form = document.getElementById('gradient_form');
  current_gradient.angle = gradient_form[2].value;
  current_gradient.start_color = gradient_form[0].value;
  current_gradient.end_color = gradient_form[1].value;
}

// Makes a css gradient rule from values
function set_gradient_rule(angle, start_color, end_color) {
  let gradient_value = `linear-gradient(${angle}deg,
                          ${start_color},
                          ${end_color})`;
  return (gradient_value);
}

// Displays gradient and gradient code
function render_gradient(gradient) {
  document.getElementById('gradient').style.backgroundImage = gradient;
  document.getElementById('gradient-css-code').innerHTML = 'background-image: '
                                                            + gradient + ';';
}

// Combines form value grabbing, defining rule, and rendering gradient & code
function create_gradient() {
  let els = collect_gradient_data();
  let gradient_rule = set_gradient_rule(
    current_gradient.angle,
    current_gradient.start_color,
    current_gradient.end_color
  );
  render_gradient(gradient_rule);
}

// Load preset gradient -- this is messy (but it works!)
function load_preset_gradient(preset_gradient){
  current_gradient.angle = PRESET_GRADIENTS[preset_gradient].angle;
  current_gradient.start_color = PRESET_GRADIENTS[preset_gradient].start_color;
  current_gradient.end_color = PRESET_GRADIENTS[preset_gradient].end_color;

  let gradient_rule = set_gradient_rule(
    current_gradient.angle,
    current_gradient.start_color,
    current_gradient.end_color
  );
  render_gradient(gradient_rule);

  document.getElementById('start_color').value = current_gradient.start_color;
  document.getElementById('end_color').value = current_gradient.end_color;
  document.getElementById('angle').value = current_gradient.angle;

}

// Copies gradient code to user clipboard
function copy_to_clipboard() {
  /* Get the text field */
  let copyText = document.getElementById('gradient-css-code').innerHTML;

  const el = document.createElement('textarea');
  el.value = copyText;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  /* Alert the copied text */
  alert('Copied the text: ' + copyText);
}
