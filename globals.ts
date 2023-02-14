declare global {
  namespace JSX {
    interface IntrinsicElements {
      "hello-world": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
