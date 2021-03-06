import React, { useState, useRef } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import api from '~/services/api';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  function setRef() {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);

    setRef();
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || `https://api.adorable.io/avatars/128/abott@adorable.png`
          }
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  );
}
