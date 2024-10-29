import React, { useRef, useEffect } from "react";
import { Modal, Button, Typography, Box } from "@mui/material";

const FocusTrapModal = ({ open, onClose }) => {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  useEffect(() => {
    if (open) {
      firstFocusableRef.current?.focus();

      const handleKeyDown = (event) => {
        const { key } = event;
        if (key === "Escape") {
          onClose();
        }
        if (key === "Tab") {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], [tabindex]:not([tabindex="-1"]), input, select, textarea'
          );

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open, onClose]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        ref={modalRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Focus Trap Modal
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This modal contains a focus trap to enhance accessibility.
        </Typography>
        <Button
          onClick={() => alert("Action 1")}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Action 1
        </Button>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ mt: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default FocusTrapModal;
