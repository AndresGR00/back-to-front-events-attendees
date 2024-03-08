/**
 * Esta es una función que crea un input.
 * @param {string} inputType - Tipo del input. Ej: text, number...
 * @param {string} inputName - Nombre del input.
 * @param {string} inputId - Id del input.
 * @param {string} inputPlaceholder - Placeholder del input.
 * @param {boolean} inputRequired - Indica si el input es required.
 * @param {string} inputClassName - Clase del input (Poner sin ".").
 * @param {string} inputAccept - Formatos aceptados.
 * @returns {HTMLInputElement} - Retorna el componente creado.
 */

export const createInput = ({
  inputType,
  inputName,
  inputId,
  inputPlaceholder,
  inputRequired,
  inputClassName,
  inputAccept
}) => {
  const input = document.createElement("input");
  input.type = inputType;
  input.name = inputName;
  input.id = inputId;
  input.placeholder = inputPlaceholder;
  input.required = inputRequired;
  input.classList.add(`${inputClassName}`);
  input.accept = inputAccept || null;
  return input;
};