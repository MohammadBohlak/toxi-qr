// src/components/homeComponents/uploadImage/UploadImage.jsx
import React, { useCallback, useEffect, useRef } from "react";
import { useFormikContext } from "formik";
import {
  DeleteButton,
  HiddenInput,
  UploadContent,
  UploadZone,
} from "./uploadImage.styles";
import { FiUpload, FiX } from "react-icons/fi";
import { Alert } from "react-bootstrap";
import { SmallText } from "../../common/texts";
import { useTranslation } from "react-i18next";

export default function UploadImage({ name }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  const fileInputRef = useRef(null);
  const file = values[name];
  const error = touched[name] && errors[name];
  const { t } = useTranslation();

  const validateAndSetFile = (candidate) => {
    if (candidate && candidate.type.startsWith("image/")) {
      setFieldValue(name, candidate);
    } else {
      // يحذف الملف لو كان غير صورة
      setFieldValue(name, null);
    }
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dropped = e.dataTransfer.files?.[0] || null;
      validateAndSetFile(dropped);
    },
    [validateAndSetFile]
  );

  const handleChange = useCallback(
    (e) => {
      const selected = e.target.files?.[0] || null;
      validateAndSetFile(selected);
    },
    [validateAndSetFile]
  );

  const handleClickZone = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    const handlePaste = (e) => {
      const items = e.clipboardData?.items || [];
      for (let item of items) {
        if (item.kind === "file" && item.type.startsWith("image/")) {
          validateAndSetFile(item.getAsFile());
          return;
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [validateAndSetFile]);
  const handleDelete = (e) => {
    e.stopPropagation();
    setFieldValue(name, null);
  };

  return (
    <>
      {error && (
        <Alert style={{ fontSize: "var(--small-text)" }} variant="danger">
          {errors[name]}
        </Alert>
      )}

      <UploadZone
        onClick={handleClickZone}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <HiddenInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
        />

        {file ? (
          <>
            <DeleteButton onClick={(e) => handleDelete(e)}>
              <FiX />
            </DeleteButton>
            <img
              className="preview"
              src={URL.createObjectURL(file)}
              alt="Preview"
            />
          </>
        ) : (
          <UploadContent>
            <FiUpload size={48} />
            <SmallText className="text-muted">
              {t("detection.upload.drop_here")}
            </SmallText>
          </UploadContent>
        )}
      </UploadZone>
    </>
  );
}
