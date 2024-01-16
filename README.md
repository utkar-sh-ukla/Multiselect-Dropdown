# Multiselect React Application

This is a multiselect React application built with TypeScript. It provides a user-friendly interface for selecting multiple items from a dropdown list.

## Setting Up the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running `npm install`.
4. Start the development server by running `npm start`.

## Features

- **Multiselect Dropdown**: Allows users to select multiple items from a dropdown list.
- **Search Functionality**: Users can search for items within the dropdown list.
- **Chip Display**: Selected items are displayed as chips, which can be easily removed.
- **Keyboard Navigation**: The dropdown supports navigation using the keyboard.

## Specifications

- **Interactive Input Field**: Upon clicking the input field, a list of available items is displayed.
- **Dynamic List Filtering**: As users type in the input field, the list dynamically updates to display only items that match the entered text.
- **Chip Creation**: Selecting an item from the list transforms it into a chip that is displayed above the input field. The input field adjusts its size automatically to accommodate the new chip.
- **Chip Removal**: Each chip features a close ("X") icon. Clicking this icon removes the corresponding chip and reintroduces the associated item back into the list.
- **Keyboard Navigation**: The dropdown supports navigation using the keyboard.
- **Backspace Functionality (Bonus)**: When the input field is empty and the user presses the backspace key, the last chip becomes highlighted. If the user presses backspace again, the highlighted chip is deleted.

## Built With

- [React](https://reactjs.org/) - The web framework used.
- [TypeScript](https://www.typescriptlang.org/) - Used for static typing.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used for styling.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE.md) file for details.