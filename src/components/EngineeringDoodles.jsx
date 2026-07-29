export default function EngineeringDoodles() {
  return (
    <svg
      className="engineering-doodles"
      viewBox="0 0 1000 610"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {/* Upper-left bearing sketch. Kept outside the centered text area. */}
        <g className="doodle doodle-bearing">
          <circle cx="78" cy="112" r="39" />
          <circle cx="78" cy="112" r="14" />
          <path d="M78 63V45M78 179v-18M29 112H13M143 112h-17" />
          <path d="M49 83 37 71M119 153l-12-12M49 141l-12 12M119 71l-12 12" />
          <path d="M57 112h42M78 91v42" />
          <text x="22" y="190" fill="currentColor" stroke="none">bearing study</text>
        </g>

        {/* Upper-right dimension notes. */}
        <g className="doodle doodle-dimension">
          <path d="M813 96h145M813 85v22M958 85v22" />
          <path d="m827 96 12-7v14zM944 96l-12-7v14z" fill="currentColor" />
          <text x="867" y="78" fill="currentColor" stroke="none">145 mm</text>
          <path d="M835 130h95M850 116v28M917 116v28" />
          <text x="864" y="158" fill="currentColor" stroke="none">± 0.05</text>
        </g>

        {/* Lower-left free-body sketch. */}
        <g className="doodle doodle-force">
          <path d="M25 500h205M25 500l22-15M25 500l22 15" />
          <path d="M230 500l-22-15M230 500l-22 15" />
          <path d="M124 472v-84M124 388l-9 20M124 388l9 20" />
          <text x="68" y="477" fill="currentColor" stroke="none">F = ma</text>
          <text x="139" y="411" fill="currentColor" stroke="none">Rᵧ</text>
        </g>

        {/* Lower-right radius and stress notes. */}
        <g className="doodle doodle-radius">
          <path d="M777 493c42-79 105-86 151-24" />
          <path d="M777 493l-20-14M777 493l8-23M928 469l-2-25M928 469l-22-9" />
          <text x="827" y="430" fill="currentColor" stroke="none">R = 62</text>
          <text x="817" y="541" fill="currentColor" stroke="none">σ = My / I</text>
        </g>
      </g>
    </svg>
  );
}
