import React from 'react';
import { Link } from 'react-router-dom'

const color = `#da552f`

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '45px',
  borderRadius: '5px',
  border: `2px solid ${color}`,
  background: 'none',
  marginTop: '10px',
  color,
  fontWeight: '700',
  fontSize: '16px',
  textDecoration: `none`
}

const LinkButton = props => (
  <Link style={style} to={props.href}>{props.children}</Link>
)

export default LinkButton;