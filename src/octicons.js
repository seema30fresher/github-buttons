import data from 'octicons/build/data'

export const octicon = function (icon, height) {
  icon = ('' + icon).toLowerCase().replace(/^octicon-/, '')
  if (!data.hasOwnProperty(icon)) {
    icon = 'mark-github'
  }
  return '<svg version="1.1" width="' + (height * data[icon].width / data[icon].height) + '" height="' + height + '" viewBox="0 0 ' + data[icon].width + ' ' + data[icon].height + '" class="octicon octicon-' + icon + '" aria-hidden="true">' + data[icon].path + '</svg>'
}
