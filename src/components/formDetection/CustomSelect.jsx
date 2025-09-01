// src/components/formDetection/CustomSelect.jsx
import React, { useState, useRef, useEffect } from "react";
import { useField, useFormikContext } from "formik";
import { Form } from "react-bootstrap";
import "./customSelect.css"; // تحكم بالستايلات حسب حاجتك
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function CustomSelect({ name, label, options, placeholder }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef();

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val) => {
    setFieldValue(name, val);
    setOpen(false);
  };

  const displayLabel =
    options.find((opt) => opt.value === field.value)?.label || placeholder;

  return (
    <Form.Group
      controlId={name}
      ref={containerRef}
      className="custom-select-group"
    >
      <Form.Label>{label}</Form.Label>

      {/* العنصر القابل للنقر لفتح/إغلاق القائمة */}
      <div
        className={`custom-select-control ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
        onClick={() => setOpen((o) => !o)}
        tabIndex={0}
        onBlur={() => setOpen(false)} // يختم القائمة عند فقدان التركيز
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
      >
        <span className="custom-select-value">{displayLabel}</span>
        <span className="custom-select-arrow">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>

      {/* قائمة الخيارات */}
      {isOpen && (
        <div className="custom-select-menu">
          {options.map((opt) => (
            <div
              key={opt.value}
              className="custom-select-option"
              onMouseDown={(e) => {
                e.preventDefault(); // يمنع فقدان التركيز قبل المعالجة
                handleSelect(opt.value);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}

      {/* رسائل الخطأ */}
      {meta.touched && meta.error && (
        <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
          {meta.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}
