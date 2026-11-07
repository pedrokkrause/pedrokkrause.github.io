Here's the derivation of the effective acceleration equation in a rotating reference frame, written in Markdown and using LaTeX syntax for equations:

---

# Derivation of the Effective Acceleration Equation in a Rotating Reference Frame

### Objective

To derive the expression for the effective acceleration in a rotating reference frame, taking into account the fictitious forces (centrifugal, Coriolis, and Euler forces) that arise due to the rotation of the coordinate system.

---

### 1. Basic Concepts

We consider two frames of reference:

- **Inertial Frame** ($\mathcal{I}$): A frame that is not accelerating, where Newton's laws hold in their simplest form.
- **Rotating Frame** ($\mathcal{R}$): A frame that rotates with an angular velocity $\vec{\omega}$ relative to the inertial frame.

For any vector $\vec{A}$, the relationship between the time derivative in the inertial and rotating frames is given by:

$$
\left( \frac{d\vec{A}}{dt} \right)_{\mathcal{I}} = \left( \frac{d\vec{A}}{dt} \right)_{\mathcal{R}} + \vec{\omega} \times \vec{A}
$$

where:

- $\left( \frac{d\vec{A}}{dt} \right)_{\mathcal{I}}$ is the time derivative in the inertial frame,
- $\left( \frac{d\vec{A}}{dt} \right)_{\mathcal{R}}$ is the time derivative in the rotating frame,
- $\vec{\omega}$ is the angular velocity vector of the rotating frame with respect to the inertial frame.

---

### 2. Position and Velocity Vectors

Let $\vec{r}$ be the position vector of the particle in both frames (assuming the origins coincide).

- **Velocity in the Inertial Frame** ($\vec{v}_{\mathcal{I}}$):
  
  $$
  \vec{v}_{\mathcal{I}} = \left( \frac{d\vec{r}}{dt} \right)_{\mathcal{I}}
  $$
  
- **Velocity in the Rotating Frame** ($\vec{v}_{\mathcal{R}}$):
  
  $$
  \vec{v}_{\mathcal{R}} = \left( \frac{d\vec{r}}{dt} \right)_{\mathcal{R}}
  $$

Using the derivative relationship:

$$
\vec{v}_{\mathcal{I}} = \vec{v}_{\mathcal{R}} + \vec{\omega} \times \vec{r}
$$

---

### 3. Acceleration in the Inertial Frame

The acceleration in the inertial frame is:

$$
\vec{a}_{\mathcal{I}} = \left( \frac{d\vec{v}_{\mathcal{I}}}{dt} \right)_{\mathcal{I}}
$$

To express $\vec{a}_{\mathcal{I}}$ in terms of quantities in the rotating frame, we differentiate $\vec{v}_{\mathcal{I}}$ with respect to time:

$$
\vec{a}_{\mathcal{I}} = \left( \frac{d}{dt} \left( \vec{v}_{\mathcal{R}} + \vec{\omega} \times \vec{r} \right) \right)_{\mathcal{I}}
$$

Applying the time derivative to both terms:

$$
\vec{a}_{\mathcal{I}} = \left( \frac{d\vec{v}_{\mathcal{R}}}{dt} \right)_{\mathcal{I}} + \left( \frac{d}{dt} \left( \vec{\omega} \times \vec{r} \right) \right)_{\mathcal{I}}
$$

---

### 4. Expanding Each Term

**First Term:**

$$
\left( \frac{d\vec{v}_{\mathcal{R}}}{dt} \right)_{\mathcal{I}} = \left( \frac{d\vec{v}_{\mathcal{R}}}{dt} \right)_{\mathcal{R}} + \vec{\omega} \times \vec{v}_{\mathcal{R}}
$$

**Second Term:**

$$
\left( \frac{d}{dt} \left( \vec{\omega} \times \vec{r} \right) \right)_{\mathcal{I}} = \frac{d\vec{\omega}}{dt} \times \vec{r} + \vec{\omega} \times \left( \frac{d\vec{r}}{dt} \right)_{\mathcal{I}}
$$

Since $\frac{d\vec{r}}{dt} = \vec{v}_{\mathcal{I}} = \vec{v}_{\mathcal{R}} + \vec{\omega} \times \vec{r}$:

$$
\vec{\omega} \times \vec{v}_{\mathcal{I}} = \vec{\omega} \times \vec{v}_{\mathcal{R}} + \vec{\omega} \times (\vec{\omega} \times \vec{r})
$$

---

### 5. Effective Acceleration

Combining the terms, we obtain:

$$
\vec{a}_{\mathcal{I}} = \vec{a}_{\mathcal{R}} + 2\vec{\omega} \times \vec{v}_{\mathcal{R}} + \frac{d\vec{\omega}}{dt} \times \vec{r} + \vec{\omega} \times (\vec{\omega} \times \vec{r})
$$

---

### 6. Final Form of the Effective Acceleration

To find the acceleration as observed in the rotating frame, we solve for $\vec{a}_{\mathcal{R}}$:

$$
\vec{a}_{\mathcal{R}} = \vec{a}_{\mathcal{I}} - \vec{\omega} \times (\vec{\omega} \times \vec{r}) - 2\vec{\omega} \times \vec{v}_{\mathcal{R}} - \frac{d\vec{\omega}}{dt} \times \vec{r}
$$

Thus, the effective acceleration in the rotating frame is:

$$
\vec{a}_{\text{eff}} = \vec{a}_{\mathcal{I}} - \vec{\omega} \times (\vec{\omega} \times \vec{r}) - 2\vec{\omega} \times \vec{v}_{\mathcal{R}} - \frac{d\vec{\omega}}{dt} \times \vec{r}
$$

---

### 7. Interpretation of Terms

- **Centrifugal Acceleration** ($ -\vec{\omega} \times (\vec{\omega} \times \vec{r}) $): Acts outward from the axis of rotation.
- **Coriolis Acceleration** ($ -2\vec{\omega} \times \vec{v}_{\mathcal{R}} $): Depends on the velocity of the particle in the rotating frame.
- **Euler Acceleration** ($ -\frac{d\vec{\omega}}{dt} \times \vec{r} $): Occurs when the angular velocity $\vec{\omega}$ is changing over time.

---

### 8. Summary

The final form for the effective acceleration is:

$$
\vec{a}_{\text{eff}} = \vec{a}_{\mathcal{I}} - \vec{\omega} \times (\vec{\omega} \times \vec{r}) - 2\vec{\omega} \times \vec{v}_{\mathcal{R}} - \frac{d\vec{\omega}}{dt} \times \vec{r}
$$

In this equation:

- $\vec{a}_{\mathcal{I}}$ is the inertial acceleration.
- The fictitious terms represent the centrifugal, Coriolis, and Euler forces that account for the effects of being in a rotating frame.
