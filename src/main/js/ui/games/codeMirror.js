// Code taken from the react-code-mirror module at https://github.com/ForbesLindesay/react-code-mirror

var CodeMirrorEditor = React.createClass({
  getInitialState: function() {
    return { isControlled: this.props.value != null };
  },

  propTypes: {
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  componentDidMount: function() {
    var isTextArea = this.props.forceTextArea || false;
    if (!isTextArea) {
      this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), this.props);
      this.editor.on('change', this.handleChange);
    }
  },

  componentDidUpdate: function() {
    if (this.editor) {
      if (this.props.value != null) {
        if (this.editor.getValue() !== this.props.value) {
          this.editor.setValue(this.props.value);
        }
      }
    }
  },

  handleChange: function() {
    if (this.editor) {
      var value = this.editor.getValue();
      if (value !== this.props.value) {
        this.props.onChange && this.props.onChange({target: {value: value}});
        if (this.editor.getValue() !== this.props.value) {
          if (this.state.isControlled) {
            this.editor.setValue(this.props.value);
          } else {
            this.props.value = value;
          }
        }
      }
    }
  },

  render: function() {
    var editor = React.createElement('textarea', {
      ref: 'editor',
      value: this.props.value,
      readOnly: this.props.readOnly,
      defaultValue: this.props.defaultValue,
      onChange: this.props.onChange,
      style: this.props.textAreaStyle,
      className: this.props.textAreaClassName || this.props.textAreaClass
    });

    return React.createElement('div', {style: this.props.style, className: this.props.className}, editor);
  }
});

module.exports = CodeMirrorEditor;
